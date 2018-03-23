import * as React from 'react';
import { storiesOf } from '@storybook/react';

import BreakpointObserver from 'breakpoint-observer';

storiesOf('breakpoint-observer', module).add('Current Breakpoint', () => (
  <React.Fragment>
    <h2>Observe Current Breakpoint</h2>
    <p>
      Supplying a breakpoint object to <code>{`<BreakpointObserver />`}</code>{' '}
      will return the current breakpoint.
    </p>
    <pre>
      <code>
        {`<BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
  {breakpoint => <p>The current breakpoint is {breakpoint}!</p>}
</BreakpointObserver>`}
      </code>
    </pre>
    <BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
      {breakpoint => <p>Current breakpoint is {breakpoint}!</p>}
    </BreakpointObserver>
  </React.Fragment>
));

storiesOf('breakpoint-observer', module).add('Default Breakpoint', () => (
  <React.Fragment>
    <h2>Render Server-Side With a Default Breakpoint</h2>
    <p>
      In environments without a window, a default breakpoint can be supplied.
    </p>
    <pre>
      <code>
        {`<BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }} defaultBreakpoint={'tablet'}>
  {breakpoint => <p>The current breakpoint is {breakpoint}!</p>}
</BreakpointObserver>`}
      </code>
    </pre>
    <BreakpointObserver
      breakpoints={{ mobile: 0, tablet: 768 }}
      defaultBreakpoint={'tablet'}
    >
      {breakpoint => <p>Current breakpoint is {breakpoint}!</p>}
    </BreakpointObserver>
  </React.Fragment>
));
