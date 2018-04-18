import React, { Component } from 'react';

export interface IBreakpointConfig {
  readonly [key: string]: number;
}

export interface IProps {
  readonly breakpoints: IBreakpointConfig;
  readonly callback?: (
    id?: string,
    minWidth?: number,
    maxWidth?: number
  ) => any;
  readonly children?: (
    id?: string,
    minWidth?: number,
    maxWidth?: number
  ) => React.ReactNode;
  readonly defaultBreakpoint?: string;
}

export interface IBreakpoint {
  id: string;
  maxWidth?: number;
  minWidth: number;
  query: string;
}

export interface IState {
  breakpoint?: IBreakpoint;
  mediaQueries?: Array<IBreakpoint>;
}

export default class BreakpointObserver extends Component<IProps, IState> {
  public callback?: (id?: string, minWidth?: number, maxWidth?: number) => any;

  public constructor(props: IProps) {
    super(props);

    const { breakpoints, callback, defaultBreakpoint } = this.props;

    const mediaQueries = this.createMediaQueries(breakpoints);
    const breakpoint =
      mediaQueries &&
      mediaQueries.find(query => query.id === defaultBreakpoint);

    this.state = {
      breakpoint,
      mediaQueries
    };

    if (typeof callback === 'function') {
      this.callback = callback;
    }
  }

  public componentDidMount() {
    if (window && this.state.mediaQueries) {
      this.addMediaQueryListener();
    }
  }

  public componentDidUpdate(props: IProps) {
    if (props.breakpoints !== this.props.breakpoints) {
      const newMediaQueries = this.createMediaQueries(this.props.breakpoints);
      this.setState({ mediaQueries: newMediaQueries });

      if (window && this.state.mediaQueries) {
        this.addMediaQueryListener();
      }
    }
  }

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    return (
      this.props.children !== nextProps.children ||
      this.props.breakpoints !== nextProps.breakpoints ||
      this.state.breakpoint !== nextState.breakpoint ||
      this.state.mediaQueries !== nextState.mediaQueries
    );
  }

  public render() {
    const { children } = this.props;

    if (typeof children !== 'function') return null;

    const { breakpoint } = this.state;

    if (!breakpoint) return children();

    const { id, minWidth, maxWidth } = breakpoint;

    return children(id, minWidth, maxWidth);
  }

  private createMediaQueries(breakpoints: IBreakpointConfig) {
    if (!breakpoints || breakpoints !== Object(breakpoints)) {
      return undefined;
    }

    const sortedBreakpoints = Object.keys(breakpoints).sort(
      (a, b) => breakpoints[b] - breakpoints[a]
    );

    return sortedBreakpoints.map((breakpoint, index) => {
      let query = '';
      const minWidth = breakpoints[breakpoint];
      const nextBreakpoint = sortedBreakpoints[index - 1] as string | undefined;
      const maxWidth = nextBreakpoint ? breakpoints[nextBreakpoint] : undefined;

      if (minWidth >= 0) {
        query = `(min-width: ${minWidth}px)`;
      }

      if (typeof maxWidth !== 'undefined') {
        if (query) {
          query += ' and ';
        }
        query += `(max-width: ${maxWidth - 1}px)`;
      }

      return {
        id: breakpoint,
        maxWidth,
        minWidth,
        query
      };
    });
  }

  private addMediaQueryListener() {
    const { mediaQueries } = this.state;

    if (!mediaQueries) return;

    mediaQueries.forEach(({ id, minWidth, maxWidth, query }) => {
      const mediaQuery = window.matchMedia(query);

      this.updateBreakpoint(id, maxWidth, minWidth, query, mediaQuery);
      mediaQuery.addListener(() =>
        this.updateBreakpoint(id, maxWidth, minWidth, query, mediaQuery)
      );
    });
  }

  private updateBreakpoint(
    id: string,
    maxWidth: number | undefined,
    minWidth: number,
    query: string,
    { matches }: { matches: boolean }
  ) {
    if (matches) {
      this.setState({ breakpoint: { id, maxWidth, minWidth, query } });
      this.callback && this.callback(id, minWidth, maxWidth);
    }
  }
}
