import * as React from 'react'
import { storiesOf } from '@storybook/react'

import BreakpointObserver from 'breakpoint-observer'

storiesOf('breakpoint-observer', module).add('Current Width', () => (
  <React.Fragment>
    <h2>Minimal config</h2>
    <p>Without any props <code>{`<BreakpointObserver />`}</code> returns current the <code>window.innerWidth</code></p>
    <pre>
    <code>
{`<BreakpointObserver>
  {({ width }) => <p>Current width is {width} pixels!</p>}
</BreakpointObserver>`}
    </code>
    </pre>
    <BreakpointObserver>
      {({ width }) => <p>Current width is {width} pixels!</p>}
    </BreakpointObserver>
  </React.Fragment>
))

storiesOf('breakpoint-observer', module).add('Breakpoints', () => (
  <React.Fragment>
    <h2>Breakpoints</h2>
    <p>Supplying a breakpoints object to <code>{`<BreakpointObserver />`}</code> will return the current breakpoint.</p>
    <pre>
    <code>
{`<BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
  {({ breakpoint }) => <p>Current breakpoint is {breakpoint}!</p>}
</BreakpointObserver>`}
    </code>
    </pre>
    <BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
      {({ breakpoint }) => <p>Current breakpoint is {breakpoint}!</p>}
    </BreakpointObserver>
  </React.Fragment>
))
