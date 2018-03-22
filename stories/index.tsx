import * as React from 'react'
import { storiesOf } from '@storybook/react'

import BreakpointObserver from 'breakpoint-observer'

storiesOf('breakpoint-observer', module).add('Current Width', () => (
  <React.Fragment>
    <h2>Minimal config</h2>
    <p>Without any props <code>{`<BreakpointObserver />`}</code> returns current the <code>window.innerWidth</code></p>
    <p>
      <pre>
        <code>{`
  <BreakpointObserver>
    {({ width }) => <p>Current width is {width} pixels!</p>}
  </BreakpointObserver>
        `}</code>
      </pre>
    </p>
    <BreakpointObserver>
      {({ width }) => <p>Current width is {width} pixels!</p>}
    </BreakpointObserver>
  </React.Fragment>
))
