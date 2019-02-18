import * as React from "react";
import { storiesOf } from "@storybook/react";

import BreakpointObserver, { useBreakpoint } from "../src";

storiesOf("breakpoint-observer", module).add("useBreakpoint hook", () => {
  const CurrentBreakpoint = () => {
    const { breakpoint, minWidth, maxWidth } = useBreakpoint();
    return (
      <p>
        The current breakpoint is {breakpoint} with minWidth of {minWidth}
        px {maxWidth ? ` and a maxWidth of ${maxWidth}px` : ""}!
      </p>
    );
  };

  return (
    <>
      <h2>Usage with React Hooks.</h2>
      <p>
        You can inject the current <code>breakpoint</code>,{" "}
        <code>minWidth</code> and <code>maxWidth</code> props to any component
        using the <code>useBreakpoint</code> hook. Hooks were introduced in
        React v16.8.0.
      </p>
      <BreakpointObserver
        breakpoints={{ mobile: 0, tablet: 768, desktop: 1280 }}
      >
        <CurrentBreakpoint />
      </BreakpointObserver>
    </>
  );
});
