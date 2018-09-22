# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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