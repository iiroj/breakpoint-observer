import * as React from 'react';

export interface IBreakpointConfig {
  readonly [key: string]: number;
}

export interface IProps {
  readonly breakpoints?: IBreakpointConfig;
  readonly children: (props?: string) => React.ReactNode;
  readonly defaultBreakpoint?: string;
}

export interface IState {
  breakpoint?: string;
}

export default class BreakpointObserver extends React.Component<
  IProps,
  IState
> {
  public constructor(props) {
    super(props);

    this.state = {
      breakpoint: this.props.defaultBreakpoint
    };
  }

  public componentWillMount() {
    if (window && this.props.breakpoints) {
      this.observe();
    }
  }

  public shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
    return (
      this.state.breakpoint !== nextState.breakpoint ||
      this.props.breakpoints !== nextProps.breakpoints ||
      this.props.children !== nextProps.children
    );
  }

  public render() {
    const { children } = this.props;

    if (typeof children !== 'function') return null;

    return children(this.state.breakpoint);
  }

  private updateState({ matches }, width) {
    if (matches) {
      this.setState({
        breakpoint: Object.entries(this.props.breakpoints)
          .find(i => i[1] === width)[0]
          .toString()
      });
    }
  }

  private observe() {
    const { breakpoints } = this.props;
    const sortedBreakpoints = Object.keys(breakpoints).sort(
      (a, b) => breakpoints[b] - breakpoints[a]
    );

    let query;

    sortedBreakpoints.forEach((breakpoint, index) => {
      const minWidth = breakpoints[breakpoint];
      const nextWidth = sortedBreakpoints[index - 1];

      if (minWidth >= 0) {
        query = `(min-width: ${minWidth}px)`;
      }

      if (typeof nextWidth !== 'undefined') {
        if (query) {
          query += ' and ';
        }

        query += `(max-width: ${breakpoints[nextWidth] - 1}px)`;
      }

      let mediaQuery = window.matchMedia(query);

      this.updateState(mediaQuery, minWidth);

      mediaQuery.addListener(() => this.updateState(mediaQuery, minWidth));
    });
  }
}
