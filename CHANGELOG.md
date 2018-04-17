# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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