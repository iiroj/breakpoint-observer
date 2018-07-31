import * as React from 'react';
import { storiesOf } from '@storybook/react';

import BreakpointObserver from './';

storiesOf('breakpoint-observer', module).add('Current Breakpoint', () => (
  <React.Fragment>
    <h2>Observe Current Breakpoint</h2>
    <p>
      Supplying a breakpoint object to <code>{`<BreakpointObserver />`}</code> will return the current breakpoint.
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
    <p>In environments without a window, a default breakpoint can be supplied.</p>
    <pre>
      <code>
        {`<BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }} defaultBreakpoint={'tablet'}>
  {breakpoint => <p>The current breakpoint is {breakpoint}!</p>}
</BreakpointObserver>`}
      </code>
    </pre>
    <BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }} defaultBreakpoint={'tablet'}>
      {breakpoint => <p>Current breakpoint is {breakpoint}!</p>}
    </BreakpointObserver>
  </React.Fragment>
));

storiesOf('breakpoint-observer', module).add('Callback Function', () => {
  const myCallback = breakpoint => console.log(`The current breakpoint is ${breakpoint}!`);

  return (
    <React.Fragment>
      <h2>Callback function</h2>
      <p>
        The <code>{`<BreakpointObserver />`}</code> can also be used with a callback function that receives the current
        breakpoint. This can then be stored in your application state. This way you do not actually supply any children
        to <code>{`<BreakpointObserver />`}</code> and can just include it once in your application's top level.
      </p>
      <pre>
        <code>
          {`const myCallback = breakpoint =>
    console.log(\`The current breakpoint is \${breakpoint}!\`);

<BreakpointObserver
  breakpoints={{ mobile: 0, tablet: 768 }}
  defaultBreakpoint={'tablet'}
  callback={myCallback}
/>`}
        </code>
      </pre>
      <BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }} defaultBreakpoint={'tablet'} callback={myCallback} />
    </React.Fragment>
  );
});

storiesOf('breakpoint-observer', module).add('Max and Min Width', () => (
  <React.Fragment>
    <h2>Observe Current Breakpoint's Max and Min Width</h2>
    <p>
      <code>{`<BreakpointObserver />`}</code> also returns the current breakpoint's min and max widths as the second and
      third arguments, respectively.
    </p>
    <pre>
      <code>
        {`<BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
  {(breakpoint, minWidth, maxWidth) => <p>The current breakpoint is {breakpoint} with a minWidth of {minWidth}px{maxWidth ? \` and a maxWidth of \${maxWidth}px\` : ''}!</p>}
</BreakpointObserver>`}
      </code>
    </pre>
    <BreakpointObserver breakpoints={{ mobile: 0, tablet: 768 }}>
      {(breakpoint, minWidth, maxWidth) => (
        <p>
          The current breakpoint is {breakpoint} with minWidth of {minWidth}
          px
          {maxWidth ? ` and a maxWidth of ${maxWidth}px` : ''}!
        </p>
      )}
    </BreakpointObserver>
  </React.Fragment>
));
