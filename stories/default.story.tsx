import * as React from "react";
import { storiesOf } from "@storybook/react";

import BreakpointObserver from "../";

storiesOf("breakpoint-observer", module).add("Default Breakpoint", () => (
  <>
    <h2>Render Server-Side With a Default Breakpoint</h2>
    <p>
      In environments without a window, a default breakpoint can be supplied.
    </p>
    <BreakpointObserver
      breakpoints={{ mobile: 0, tablet: 768 }}
      defaultBreakpoint={"tablet"}
    >
      {breakpoint => <p>Current breakpoint is {breakpoint}!</p>}
    </BreakpointObserver>
  </>
));
