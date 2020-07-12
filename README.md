# Node.js example CLI app

[![Build Status](https://travis-ci.org/hugojosefson/merge-html.svg?branch=master)](https://travis-ci.org/hugojosefson/merge-html)
[![npm page](https://img.shields.io/npm/v/@hugojosefson/merge-html.svg)](https://npmjs.com/package/@hugojosefson/merge-html)
[![License MIT](https://img.shields.io/npm/l/@hugojosefson/merge-html.svg)](https://tldrlegal.com/license/mit-license)
[![SemVer 2.0.0](https://img.shields.io/badge/SemVer-2.0.0-lightgrey.svg)](https://semver.org/spec/v2.0.0.html)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

CLI for merging two or more `.html` files together.

## Prerequisite

Node.js, `v13.2.0` or higher, ideally at least `v14.0.0`.

Recommended to install latest via [nvm](https://github.com/nvm-sh/nvm#readme):

```bash
nvm install stable
```

## Usage

```bash
npx --package @hugojosefson/merge-html merge-html input1.html input2.html [...inputN.html] > output.html
```

Will merge all the input html files, and redirect the output html to
`output.html`.

## Programmatic access

You can also `import` the module, and use its exported functions
programmatically.

### API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### merge

##### Parameters

- `htmls` **...any**
