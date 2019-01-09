<div align="center">
  <h1 align="center">breakpoint-observer</h1>
  <p>A React Component for rendering based on breakpoints.</p>
  <a href="https://www.npmjs.com/package/breakpoint-observer"><strong>npm</strong></a> ·
  <a href="https://github.com/iiroj/breakpoint-observer"><strong>GitHub</strong></a> ·
  <a href="https://gitlab.com/iiroj/breakpoint-observer"><strong>GitLab</strong></a>
  <br/>
  <br/>
  <a href="https://www.npmjs.com/package/breakpoint-observer">
    <img src="https://img.shields.io/npm/v/breakpoint-observer.svg">
  </a>
  <a href="https://github.com/iiroj/breakpoint-observer">
    <img src="https://img.shields.io/github/languages/code-size/iiroj/breakpoint-observer.svg">
  </a>
  <a href="https://gitlab.com/iiroj/breakpoint-observer/commits/master">
    <img alt="pipeline status" src="https://gitlab.com/iiroj/breakpoint-observer/badges/master/pipeline.svg" />
  </a>
  <a href="https://github.com/iiroj/breakpoint-observer/blob/master/package.json">
    <img src="https://img.shields.io/david/iiroj/breakpoint-observer.svg">
  </a>
  <a href="https://github.com/iiroj/breakpoint-observer/blob/master/package.json">
    <img src="https://img.shields.io/david/dev/iiroj/breakpoint-observer.svg">
  </a>
  <br/>
  <br/>
</div>

## Usage

`breakpoint-observer` works via the [React Context](https://reactjs.org/docs/context.html), or a callback function. Simply render `<BreakpointObserver.Provider />` at the top-level of your application and listen to changes via some state like redux, or with the `<BreakpointObserver.Consumer />`.

### Context

Import `BreakpointObserver.Provider` as a React component and wrap it around some content. Somewhere lower in the React tree, use the `BreakpointObserver.Consumer` with a child function that receives the current breakpoint, and its minWidth (number) and maxWidth (number), from the specified breakpoint object. These values can be used for anything, for example conditional rendering of different child components!

```javascript
import * as BreakpointObserver from 'breakpoint-observer';

...

const CurrentBreakpoint = () => (
  <BreakpointObserver.Consumer>
    {({ breakpoint, maxWidth, minWidth } ) => <p>The current breakpoint is {breakpoint}!</p>}
  </BreakpointObserver.Consumer>
);

...

ReactDOM.render(
  <BreakpointObserver.Provider
    breakpoints={{ mobile: 0, tablet: 768, desktop: 1280 }}
    defaultBreakpoint="desktop"
  >
    <CurrentBreakpoint />
  </BreakpointObserver.Provider>,
  document.body
);
```

### Callback Function

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

### SSR

For server-side rendering a `defaultBreakpoint` prop is supported. This value is returned when there is no window to calculate actual breakpoints from.

## Functionality

This component uses the [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) functionality to calculate the current breakpoint. For a list of breakpoints, we generate some css media queries in the form of `(min-width: XXXpx) and (max-width: YYYpx)` and then add listeners for the changes. `<BreakpointObserver />` will then update its state when the breakpoint changes from one rule to another.

## Developing

This project is built with [Typescript](http://www.typescriptlang.org/). A [Storybook](http://storybook.js.org/) is included for local previewing. The easiest way to get started is cloning the repo and starting the storybook server locally via `npm start`.
