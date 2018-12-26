import * as React from "react";
import { storiesOf } from "@storybook/react";

import BreakpointObserver from "../src";

storiesOf("breakpoint-observer", module).add("Callback Function", () => {
  const myCallback = (props: { breakpoint?: string }) =>
    console.log(`The current breakpoint is ${props.breakpoint}!`);

  return (
    <>
      <h2>Callback function</h2>
      <p>
        The <code>{`<BreakpointObserver />`}</code> can also be used with a
        callback function that receives the current breakpoint. This can then be
        stored in your application state. This way you do not actually supply
        any children to <code>{`<BreakpointObserver />`}</code> and can just
        include it once in your application's top level.
      </p>

      <BreakpointObserver
        breakpoints={{ mobile: 0, tablet: 768, desktop: 1280 }}
        defaultBreakpoint={"tablet"}
        onChange={myCallback}
      />
    </>
  );
});
