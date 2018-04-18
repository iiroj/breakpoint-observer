# breakpoint-observer

[![npm](https://img.shields.io/npm/v/breakpoint-observer.svg)](https://www.npmjs.com/package/breakpoint-observer)
[![GitHub issues](https://img.shields.io/github/issues-raw/iiroj/breakpoint-observer.svg)](https://github.com/iiroj/breakpoint-observer/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/iiroj/breakpoint-observer.svg)](https://github.com/iiroj/breakpoint-observer/pulls)
[![Build Status](https://travis-ci.org/iiroj/breakpoint-observer.svg?branch=master)](https://travis-ci.org/iiroj/breakpoint-observer)

A React Component for rendering based on breakpoints.

## Usage

Using `breakpoint-observer` is simple. You can use it with a render prop, a child function that will receive the current breakpoint. Alternatively, you can skip rendering children and supply it a callback function.

### Render Prop

Import `breakpoint-observer` as a React component and wrap it around some content. Its children should be a function that receives the current breakpoint from the specified breakpoint object. The current breakpoint value is a string that can be used for anything, for example conditional rendering of different child components!

```javascript
import React from 'react';
import BreakpointObserver from 'breakpoint-observer';

...

<BreakpointObserver
  breakpoints={{ mobile: 0, tablet: 768 }}
  defaultBreakpoint={'tablet'}
>
  {breakpoint => <p>The current breakpoint is {breakpoint}!</p>}
</BreakpointObserver>
```

### Callback Function

Import `breakpoint-observer` as a React component and give it a callback function. The function will receive the current breakpoint from the specified breakpoint object. The current breakpoint value is a string that can be used for anything, for example store it in Redux!

```javascript
import React from 'react';
import BreakpointObserver from 'breakpoint-observer';

const myCallback = breakpoint =>
    console.log(`The current breakpoint is ${breakpoint}!`);

...

<BreakpointObserver
  breakpoints={{ mobile: 0, tablet: 768 }}
  callback={myCallback}
  defaultBreakpoint={'tablet'}
/>
```

### SSR

For server-side rendering a `defaultBreakpoint` is supported. This value is returned when there is no window to calculate actual breakpoints from.

## Functionality

This component uses the [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) functionality to calculate the current breakpoint. For a list of breakpoints, we generate some css media queries in the form of `(min-width: XXXpx) and (max-width: YYYpx)` and then add listeners for the changes. `<BreakpointObserver />` will then update its state when the breakpoint changes from one rule to another.

## Developing

This project is built with [Babel 7](https://github.com/babel/babel/wiki/Babel-7) and [Typescript](http://www.typescriptlang.org/). Typescript is actually run and compiled through Babel. A [Storybook](http://storybook.js.org/) is included for local previewing. The easiest way to get started is cloning the repo and starting the storybook server locally.