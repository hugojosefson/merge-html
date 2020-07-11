# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0)
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

_New unreleased changes are listed here, and moved down to a release number when
released._

## [3.0.0] - 2020-04-02

### Changed

- **BREAKING:** Require Node.js >=13.2.0.

### Changed

- Remove `realpath`, because it's not needed for this.

## [2.1.1] - 2020-02-05

### Fixed

- Use [esm](https://www.npmjs.com/package/esm) instead of
  [mjs-mocha](https://www.npmjs.com/package/mjs-mocha) because some version of
  Node.js 13.x broke `mjs-mocha`.

### Changed

- Upgrade dependencies.

## [2.0.1] - 2019-07-06

### Changed

- Fix realpath using https://github.com/mkropat/sh-realpath
- Change license to MIT.

## [2.0.0] - 2019-07-06

### Changed

- **BREAKING:** Require Node.js >=12.
- Usage instructions with `npx`.

### Added

- Instructions for how to use as template for new project.

## [1.0.2] - 2017-12-08

### Fixed

- Pin [documentation](https://www.npmjs.com/package/documentation) to `<5.3.3`
  until
  [documentation#968](https://github.com/documentationjs/documentation/pull/968)
  is resolved.

### Added

- More tests.

## [1.0.1] - 2017-10-05

### Added

- Hello World example code.
- Use [@std/esm](https://www.npmjs.com/package/@std/esm) for ES Module loading.
  Requires `node@>=4`.
- Connect to [Travis-CI](https://travis-ci.org/hugojosefson/nodejs-example-cli).
- Publish on npm as
  [@hugojosefson/example-cli](https://npmjs.com/package/@hugojosefson/example-cli).
