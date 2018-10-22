import * as React from "react";
import { storiesOf } from "@storybook/react";

import BreakpointObserver from "../";

storiesOf("breakpoint-observer", module).add("Current Breakpoint", () => (
  <>
    <h2>Observe Current Breakpoint</h2>
    <p>
      Supplying a breakpoint object to <code>{`<BreakpointObserver />`}</code>{" "}
      will return the current breakpoint.
    </p>
    <BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
      {breakpoint => <p>Current breakpoint is {breakpoint}!</p>}
    </BreakpointObserver>
  </>
));
