import * as React from 'react';

export interface IBreakpointConfig {
  readonly [key: string]: number;
}

export interface IProps {
  readonly breakpoints?: IBreakpointConfig;
  readonly callback?: (props?: string) => any;
  readonly children?: (props?: string) => React.ReactNode;
  readonly defaultBreakpoint?: string;
}

export interface IState {
  breakpoint?: string;
  mediaQueries?: Array<{
    id: string;
    maxWidth?: number;
    minWidth: number;
    query: string;
  }>;
}

export default class BreakpointObserver extends React.Component<
  IProps,
  IState
> {
  public callback?: (props?: string) => any;

  public constructor(props) {
    super(props);

    const { breakpoints, callback, defaultBreakpoint } = this.props;

    this.state = {
      breakpoint: defaultBreakpoint,
      mediaQueries: this.createMediaQueries(breakpoints)
    };

    if (callback && typeof callback === 'function') {
      this.callback = callback;
    }
  }

  public componentWillMount() {
    if (window && this.props.breakpoints) {
      this.addMediaQueryListener();
    }
  }

  public componentWillReceiveProps({ breakpoints }) {
    if (breakpoints !== this.props.breakpoints) {
      const newMediaQueries = this.createMediaQueries(breakpoints);
      this.setState({ mediaQueries: newMediaQueries });
    }
  }

  public shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
    return (
      this.state.breakpoint !== nextState.breakpoint ||
      this.state.mediaQueries !== nextState.mediaQueries ||
      this.props.breakpoints !== nextProps.breakpoints ||
      this.props.children !== nextProps.children
    );
  }

  public render() {
    const { children } = this.props;

    if (typeof children !== 'function') return null;

    return children(this.state.breakpoint);
  }

  private createMediaQueries(breakpoints) {
    const sortedBreakpoints = Object.keys(breakpoints).sort(
      (a, b) => breakpoints[b] - breakpoints[a]
    );

    return sortedBreakpoints.map((breakpoint, index) => {
      let query: string;
      const minWidth = breakpoints[breakpoint];
      const maxWidth = sortedBreakpoints[index - 1];

      if (minWidth >= 0) {
        query = `(min-width: ${minWidth}px)`;
      }

      if (typeof maxWidth !== 'undefined') {
        if (query) {
          query += ' and ';
        }
        query += `(max-width: ${breakpoints[maxWidth] - 1}px)`;
      }

      return {
        id: Object.entries(this.props.breakpoints)
          .find(i => i[1] === minWidth)[0]
          .toString(),
        maxWidth: maxWidth && breakpoints[maxWidth] - 1,
        minWidth,
        query
      };
    });
  }

  private addMediaQueryListener() {
    const { mediaQueries } = this.state;

    mediaQueries.forEach(({ id, query }) => {
      const mediaQuery = window.matchMedia(query);

      this.updateBreakpoint(id, mediaQuery);
      mediaQuery.addListener(() => this.updateBreakpoint(id, mediaQuery));
    });
  }

  private updateBreakpoint(id, { matches }) {
    if (matches) {
      this.setState({ breakpoint: id });
      this.callback && this.callback(id);
    }
  }
}
