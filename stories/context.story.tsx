import * as React from "react";
import { storiesOf } from "@storybook/react";

import BreakpointObserver, { BreakpointConsumer } from "../index";

storiesOf("breakpoint-observer", module).add("Context API", () => {
  const CurrentBreakpoint = () => (
    <BreakpointConsumer>
      {({ maxWidth, minWidth, breakpoint }) => (
        <p>
          The current breakpoint is {breakpoint} with minWidth of {minWidth}
          px
          {maxWidth ? ` and a maxWidth of ${maxWidth}px` : ""}!
        </p>
      )}
    </BreakpointConsumer>
  );

  return (
    <>
      <h2>Usage with React's Context API syntax.</h2>
      <p>
        <code>{`<BreakpointObserver />`}</code> provides the current breakpoint
        object via the React Context API. Consume the breakpoint with{" "}
        <code>{`<BreakpointConsumer />`}</code>.
      </p>
      <BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
        <CurrentBreakpoint />
      </BreakpointObserver>
    </>
  );
});
