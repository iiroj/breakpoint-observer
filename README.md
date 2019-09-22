# ⚠️ Deprecated ☠️

Now that React Hooks have been released in version 16.8, this package has been deprecated in favor of [use-breakpoint](https://www.npmjs.com/package/use-breakpoint). This package will continue to work, but you should upgrade to React >=16.8 and use [use-breakpoint](https://www.npmjs.com/package/use-breakpoint).

----

# breakpoint-observer

[![GitHub Actions](https://github.com/iiroj/breakpoint-observer/workflows/Tags/badge.svg)](https://github.com/iiroj/breakpoint-observer/actions)
[![version](https://img.shields.io/npm/v/breakpoint-observer.svg)](https://www.npmjs.com/package/breakpoint-observer)
[![code size](https://img.shields.io/github/languages/code-size/iiroj/breakpoint-observer.svg)](https://github.com/iiroj/breakpoint-observer)
[![dependencies](https://img.shields.io/david/iiroj/breakpoint-observer.svg)](https://github.com/iiroj/breakpoint-observer/blob/master/package.json)
[![devDependencies](https://img.shields.io/david/dev/iiroj/breakpoint-observer.svg)](https://github.com/iiroj/breakpoint-observer/blob/master/package.json)

A React Component for rendering based on breakpoints.

## Usage

The main import `BreakpointObserver` listens to breakpoint changes and uses [React Context](https://reactjs.org/docs/context.html) to pass it to components below:

```javascript
import BreakpointObserver from 'breakpoint-observer';
...

ReactDOM.render(
  <BreakpointObserver
    breakpoints={{ mobile: 0, tablet: 768, desktop: 1280 }}
    defaultBreakpoint="desktop"
  >
    <App />
  </BreakpointObserver>,
  document.body
);
```

### React hooks

```javascript
import { useBreakpoint } from 'breakpoint-observer';

...

const CurrentBreakpoint = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint();

  return <p>The current breakpoint is {breakpoint}!</p>}
};
```

### HOC

```javascript
import { withBreakpoint } from 'breakpoint-observer';

...

const CurrentBreakpoint = withBreakpoint(({ breakpoint, maxWidth, minWidth }) => (
  <p>The current breakpoint is {breakpoint}!</p>}
));
```

### Context

```javascript
import { Consumer } from 'breakpoint-observer';

...

const CurrentBreakpoint = () => (
  <BreakpointObserver.Consumer>
    {({ breakpoint, maxWidth, minWidth } ) => <p>The current breakpoint is {breakpoint}!</p>}
  </BreakpointObserver.Consumer>
);
```

## Callback usage

Import `BreakpointObserver` as a React component and give it a callback function via the `onChange` prop. The function will receive the current breakpoint like the `BreakpointObserver.Consumer`.

```javascript
import BreakpointObserver from 'breakpoint-observer';

const myCallback = ({ breakpoint, maxWidth, minWidth }) =>
    console.log(`The current breakpoint is ${breakpoint}!`);

...

ReactDOM.render(
  <BreakpointObserver
    breakpoints={{ mobile: 0, tablet: 768 }}
    onChange={myCallback}
    defaultBreakpoint={'tablet'}
  />,
  document.body
);
```

## SSR

For server-side rendering a `defaultBreakpoint` prop is supported. This value is returned when there is no window to calculate actual breakpoints from.

## Functionality

This component uses the [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) functionality to calculate the current breakpoint. For a list of breakpoints, we generate some css media queries in the form of `(min-width: XXXpx) and (max-width: YYYpx)` and then add listeners for the changes. `<BreakpointObserver />` will then update its state when the breakpoint changes from one rule to another.

## Developing

This project is built with [Typescript](http://www.typescriptlang.org/). A [Storybook](http://storybook.js.org/) is included for local previewing. The easiest way to get started is cloning the repo and starting the storybook server locally via `npm start`.
