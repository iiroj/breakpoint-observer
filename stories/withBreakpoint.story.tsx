import * as React from "react";
import { storiesOf } from "@storybook/react";

import {
  CurrentBreakpoint,
  Provider as BreakpointProvider,
  withBreakpoint
} from "../index";

storiesOf("breakpoint-observer", module).add("withBreakpoint HOC", () => {
  type DisplayBreakpointProps = CurrentBreakpoint & {
    showMaxWidth?: boolean;
  };

  const DisplayBreakpoint = ({
    maxWidth,
    minWidth,
    breakpoint,
    showMaxWidth = false
  }: DisplayBreakpointProps) => (
    <p>
      The current breakpoint is {breakpoint} with minWidth of {minWidth}
      px
      {showMaxWidth && maxWidth ? ` and a maxWidth of ${maxWidth}px` : ""}!
    </p>
  );

  const CurrentBreakpoint = withBreakpoint(DisplayBreakpoint);

  return (
    <>
      <h2>Simplify Context with withBreakpoint.</h2>
      <p>
        You can inject the current <code>breakpoint</code>,{" "}
        <code>minWidth</code> and <code>maxWidth</code> props to any component
        using the <code>withBreakpoint</code> HOC.
      </p>
      <BreakpointProvider
        breakpoints={{ mobile: 0, tablet: 768, desktop: 1280 }}
      >
        <CurrentBreakpoint showMaxWidth={true} />
      </BreakpointProvider>
    </>
  );
});
