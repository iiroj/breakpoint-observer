import * as React from "react";

const BreakpointContext = React.createContext<CurrentBreakpoint>({});

export type BreakpointConfig = {
  readonly [key: string]: number;
};

export type CurrentBreakpoint = {
  breakpoint?: string;
  maxWidth?: number;
  minWidth?: number;
};

export type CallbackFn = (args: CurrentBreakpoint) => any;

interface Props {
  readonly breakpoints: BreakpointConfig;
  readonly onChange?: CallbackFn;
  readonly children?: React.ReactNode;
  readonly defaultBreakpoint?: string;
}

type MediaQuery = {
  breakpoint: string;
  maxWidth?: number;
  minWidth: number;
  query: string;
};

type State = {
  current?: CurrentBreakpoint;
  mediaQueries?: MediaQuery[];
};

export default class BreakpointObserver extends React.Component<Props, State> {
  public callback?: CallbackFn;

  public constructor(props: Props) {
    super(props);

    const { onChange, defaultBreakpoint } = this.props;

    const mediaQueries = this.createMediaQueries(this.props.breakpoints);
    const current =
      mediaQueries &&
      mediaQueries.find(query => query.breakpoint === defaultBreakpoint);

    this.state = {
      current,
      mediaQueries
    };

    if (typeof onChange === "function") {
      this.callback = onChange;
    }
  }

  public componentDidMount() {
    if (window && this.state.mediaQueries) {
      this.addMediaQueryListener();
    }
  }

  public componentDidUpdate(props: Props) {
    if (props.breakpoints !== this.props.breakpoints) {
      const newMediaQueries = this.createMediaQueries(this.props.breakpoints);
      this.setState({ mediaQueries: newMediaQueries });

      if (window && this.state.mediaQueries) {
        this.addMediaQueryListener();
      }
    }
  }

  public render() {
    const { children } = this.props;

    if (!children) return null;

    const { current } = this.state;

    if (!current) return children;

    return (
      <BreakpointContext.Provider value={current}>
        {children}
      </BreakpointContext.Provider>
    );
  }

  private createMediaQueries(breakpoints: BreakpointConfig) {
    if (!breakpoints || breakpoints !== Object(breakpoints)) {
      return undefined;
    }

    const sortedBreakpoints = Object.keys(breakpoints).sort(
      (a, b) => breakpoints[b] - breakpoints[a]
    );

    return sortedBreakpoints.map((breakpoint, index) => {
      let query = "";
      const minWidth = breakpoints[breakpoint];
      const nextBreakpoint = sortedBreakpoints[index - 1] as string | undefined;
      const maxWidth = nextBreakpoint ? breakpoints[nextBreakpoint] : undefined;

      if (minWidth >= 0) {
        query = `(min-width: ${minWidth}px)`;
      }

      if (typeof maxWidth !== "undefined") {
        if (query) {
          query += " and ";
        }
        query += `(max-width: ${maxWidth - 1}px)`;
      }

      return {
        breakpoint,
        maxWidth,
        minWidth,
        query
      };
    });
  }

  private addMediaQueryListener() {
    const { mediaQueries } = this.state;

    if (!mediaQueries) return;

    mediaQueries.forEach(({ breakpoint, minWidth, maxWidth, query }) => {
      const mediaQuery = window.matchMedia(query);
      this.updateBreakpoint(breakpoint, maxWidth, minWidth, mediaQuery);
      // tslint:disable deprecation
      mediaQuery.addListener(() =>
        this.updateBreakpoint(breakpoint, maxWidth, minWidth, mediaQuery)
      );
    });
  }

  private updateBreakpoint(
    breakpoint: string,
    maxWidth: number | undefined,
    minWidth: number,
    { matches }: { matches: boolean }
  ) {
    if (matches) {
      this.setState({ current: { breakpoint, maxWidth, minWidth } });
      this.callback && this.callback({ breakpoint, minWidth, maxWidth });
    }
  }
}

export const Provider = BreakpointObserver;
export const Consumer = BreakpointContext.Consumer;

export type WithBreakpointProps = CurrentBreakpoint;

export const withBreakpoint = <ComponentProps extends {}>(
  Component: React.ComponentType<ComponentProps & WithBreakpointProps>
) => (props: ComponentProps) => (
  <BreakpointContext.Consumer>
    {({ breakpoint, maxWidth, minWidth }) => (
      <Component
        {...props}
        breakpoint={breakpoint}
        maxWidth={maxWidth}
        minWidth={minWidth}
      />
    )}
  </BreakpointContext.Consumer>
);

export const useBreakpoint = () => React.useContext(BreakpointContext);
