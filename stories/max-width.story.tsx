import * as React from "react";
import { storiesOf } from "@storybook/react";

import BreakpointObserver from "../";

storiesOf("breakpoint-observer", module).add("Max and Min Width", () => (
  <>
    <h2>Observe Current Breakpoint's Max and Min Width</h2>
    <p>
      <code>{`<BreakpointObserver />`}</code> also returns the current
      breakpoint's min and max widths as the second and third arguments,
      respectively.
    </p>
    <BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
      {(breakpoint, minWidth, maxWidth) => (
        <p>
          The current breakpoint is {breakpoint} with minWidth of {minWidth}
          px
          {maxWidth ? ` and a maxWidth of ${maxWidth}px` : ""}!
        </p>
      )}
    </BreakpointObserver>
  </>
));
