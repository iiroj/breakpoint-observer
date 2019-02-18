# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [1.5.0](https://github.com/iiroj/breakpoint-observer/compare/v1.4.10...v1.5.0) (2019-02-18)


### Features

* export useBreakpoint hook ([2757ffd](https://github.com/iiroj/breakpoint-observer/commit/2757ffd))



<a name="1.4.10"></a>
## [1.4.10](https://github.com/iiroj/breakpoint-observer/compare/v1.4.9...v1.4.10) (2019-02-05)



<a name="1.4.9"></a>
## [1.4.9](https://github.com/iiroj/breakpoint-observer/compare/v1.4.8...v1.4.9) (2019-01-26)



<a name="1.4.8"></a>
## [1.4.8](https://github.com/iiroj/breakpoint-observer/compare/v1.4.7...v1.4.8) (2019-01-26)



<a name="1.4.7"></a>
## [1.4.7](https://github.com/iiroj/breakpoint-observer/compare/v1.4.6...v1.4.7) (2019-01-25)



<a name="1.4.6"></a>
## [1.4.6](https://github.com/iiroj/breakpoint-observer/compare/v1.4.5...v1.4.6) (2019-01-19)



<a name="1.4.5"></a>
## [1.4.5](https://github.com/iiroj/breakpoint-observer/compare/v1.4.4...v1.4.5) (2019-01-15)



<a name="1.4.4"></a>
## [1.4.4](https://github.com/iiroj/breakpoint-observer/compare/v1.4.3...v1.4.4) (2019-01-13)



<a name="1.4.3"></a>
## [1.4.3](https://github.com/iiroj/breakpoint-observer/compare/v1.4.2...v1.4.3) (2019-01-09)



<a name="1.4.2"></a>
## [1.4.2](https://github.com/iiroj/breakpoint-observer/compare/v1.4.1...v1.4.2) (2019-01-09)



<a name="1.4.1"></a>
## [1.4.1](https://github.com/iiroj/breakpoint-observer/compare/v1.4.0...v1.4.1) (2019-01-09)



<a name="1.4.0"></a>
# [1.4.0](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.3.0...v1.4.0) (2019-01-04)


### Features

* use terser instead of babel-minify ([a1f5103](https://gitlab.com/iiroj/breakpoint-observer/commit/a1f5103))



<a name="1.3.0"></a>
# [1.3.0](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.2.0...v1.3.0) (2019-01-03)


### Features

* upgrade to Rollup v1.0 and build umd bundle ([12c6a30](https://gitlab.com/iiroj/breakpoint-observer/commit/12c6a30))



<a name="1.2.0"></a>
# [1.2.0](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.1.5...v1.2.0) (2018-12-26)


### Features

* generate cjs and esm build with rollup ([80fd63e](https://gitlab.com/iiroj/breakpoint-observer/commit/80fd63e))



<a name="1.1.5"></a>
## [1.1.5](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.1.4...v1.1.5) (2018-12-26)



<a name="1.1.4"></a>
## [1.1.4](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.1.3...v1.1.4) (2018-11-30)


### Bug Fixes

* withBreakpoint passes props correctly in TypeScript 3.2.1 ([4d24c19](https://gitlab.com/iiroj/breakpoint-observer/commit/4d24c19))



<a name="1.1.3"></a>
## [1.1.3](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.1.2...v1.1.3) (2018-11-10)



<a name="1.1.2"></a>
## [1.1.2](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.1.1...v1.1.2) (2018-10-29)



<a name="1.1.1"></a>
## [1.1.1](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.1.0...v1.1.1) (2018-10-24)



<a name="1.1.0"></a>
# [1.1.0](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.0.1...v1.1.0) (2018-10-24)


### Features

* add withBreakpoint HOC ([7f8c728](https://gitlab.com/iiroj/breakpoint-observer/commit/7f8c728))



<a name="1.0.1"></a>
## [1.0.1](https://gitlab.com/iiroj/breakpoint-observer/compare/v1.0.0...v1.0.1) (2018-10-23)


### Bug Fixes

* bump React version number to >=16.3 ([7b4c70a](https://gitlab.com/iiroj/breakpoint-observer/commit/7b4c70a))



<a name="1.0.0"></a>
# [1.0.0](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.10.0...v1.0.0) (2018-10-22)


### Code Refactoring

* callback prop receives an object {breakpoint, minWidth, maxWidth } ([0a79179](https://gitlab.com/iiroj/breakpoint-observer/commit/0a79179))
* remove children render prop ([d600f9f](https://gitlab.com/iiroj/breakpoint-observer/commit/d600f9f))
* rename callback prop to onChange ([973715e](https://gitlab.com/iiroj/breakpoint-observer/commit/973715e))


### BREAKING CHANGES

* This commit changes the name of the `callback` prop to `onChange` to better align it with other React conventions.
* The callback prop no longer receives three arguments, but rather an object with named keys. This change aligns its arguments with the BreakpointObserver.Consumer
* Remove support for passing a render prop as the children prop, and only support React’s Context API. This is a more native way to handle breakpoint change observations, as the BreakpointObserver.Provider can be included only once in the React tree and then consumed in multiple places with the BreakpointObserver.Consumer.



<a name="0.10.0"></a>
# [0.10.0](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.9.7...v0.10.0) (2018-10-22)


### Bug Fixes

* enable prettier ([4e910b3](https://gitlab.com/iiroj/breakpoint-observer/commit/4e910b3))


### Features

* add support for React Context API ([ff7e780](https://gitlab.com/iiroj/breakpoint-observer/commit/ff7e780))



<a name="0.9.7"></a>
## [0.9.7](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.9.6...v0.9.7) (2018-10-12)


### Bug Fixes

* Do not complain about deprecation ([5e5672c](https://gitlab.com/iiroj/breakpoint-observer/commit/5e5672c))



<a name="0.9.6"></a>
## [0.9.6](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.9.5...v0.9.6) (2018-09-22)


### Bug Fixes

* Update package-lock.json ([bc0f3a2](https://gitlab.com/iiroj/breakpoint-observer/commit/bc0f3a2))



<a name="0.9.5"></a>
## [0.9.5](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.9.4...v0.9.5) (2018-09-22)



<a name="0.9.4"></a>
## [0.9.4](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.9.3...v0.9.4) (2018-09-15)



<a name="0.9.3"></a>
## [0.9.3](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.9.2...v0.9.3) (2018-09-09)



<a name="0.9.2"></a>
## [0.9.2](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.9.1...v0.9.2) (2018-08-28)



<a name="0.9.1"></a>
## [0.9.1](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.9.0...v0.9.1) (2018-08-20)



<a name="0.9.0"></a>
# [0.9.0](https://gitlab.com/iiroj/breakpoint-observer/compare/v0.8.2...v0.9.0) (2018-08-16)


### Features

* Use standard-version ([b6054c6](https://gitlab.com/iiroj/breakpoint-observer/commit/b6054c6))



----

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- MediaQuery listeners are removed on `componentWillUnmount`

## [0.8.2] - 2018-08-09
### Changed
- Update packages
- Update readme

## [0.8.1] - 2018-07-31
### Fixed
- Update `package-lock.json`

## [0.8.0] - 2018-07-31
### Changed
- Do not include sourcemaps
- Update packages
- Build with Typescript 3.0.1
- `children` is a function that can return `any`, not just `React.ReactNode`
- Increase prettier printWidth to 120

## [0.7.12] - 2018-07-02
### Changed
- Update packages

## [0.7.11] - 2018-06-24
### Changed
- Update packages

## [0.7.10] - 2018-06-07
### Fixed
- Fix typo in license

## [0.7.9] - 2018-06-06
### Changed
- Updates to repository

## [0.7.8] - 2018-06-06
### Changed
- Updates to repository

## [0.7.7] - 2018-06-01
### Changed
- Update packages

## [0.7.6] - 2018-05-14
### Changed
- Update packages
- Migrate `.babelrc` to `babel.config.js`
 
## [0.7.5] - 2018-04-27
### Changed
- Update readme

## [0.7.4] - 2018-04-19
### Changed
- Update devDependencies

## [0.7.3] - 2018-04-19
### Fixed
- Modules are "commonJs" instead of "amd"

## [0.7.2] - 2018-04-19
### Fixed
- Updated changelog

## [0.7.1] - 2018-04-19
### Changed
- The production package is now built with the TypeScript Compiler

## [0.7.0] - 2018-04-18
### Added
- The render prop and callback function now receive the current breakpoint's minWidth and maxWidth as the second and third parameter, respectively.

## [0.6.1] - 2018-04-17
### Changed
- Update packages
- Use npm instead of Yarn

## [0.6.0] - 2018-03-30
### Changed
- Update for React 16.3.0

## [0.5.0] - 2018-03-24
### Changed
- Media queries are kept in state and updated if the props change.

## [0.4.1] - 2018-03-23
### Changed
- Update readme

## [0.4.0] - 2018-03-23
### Added
- Add support for a callback function that receives the current breakpoint
### Changed
- children are now optional, so you can keep a single global `<BreakpointObserver />` and sync the breakpoint into your application state with the callback function

## [0.3.0] - 2018-03-23
### Removed
- Remove `window.innerWidth` support to focus on breakpoints only
### Added
- Add support for a default breakpoint for SSR

## [0.2.1] - 2018-03-22
### Changed
- Better Typescript definitions

## [0.2.0] - 2018-03-22
### Added
- Add support for getting current breakpoint

## [0.1.0] - 2018-03-22
### Added
- Initial release with support for current width