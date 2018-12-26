import * as React from "react";
import { storiesOf } from "@storybook/react";

import * as BreakpointObserver from "../src";

storiesOf("breakpoint-observer", module).add("Context API", () => {
  const CurrentBreakpoint = () => (
    <BreakpointObserver.Consumer>
      {({ maxWidth, minWidth, breakpoint }) => (
        <p>
          The current breakpoint is {breakpoint} with minWidth of {minWidth}
          px
          {maxWidth ? ` and a maxWidth of ${maxWidth}px` : ""}!
        </p>
      )}
    </BreakpointObserver.Consumer>
  );

  return (
    <>
      <h2>Use with React's Context API.</h2>
      <p>
        <code>{`<BreakpointObserver />`}</code> provides the current breakpoint
        object via the React Context API. Consume the breakpoint with{" "}
        <code>{`<BreakpointConsumer />`}</code>.
      </p>
      <BreakpointObserver.Provider
        breakpoints={{ mobile: 0, tablet: 768, desktop: 1280 }}
      >
        <CurrentBreakpoint />
      </BreakpointObserver.Provider>
    </>
  );
});
