# @hugojosefson/merge-html

[![Build Status](https://travis-ci.org/hugojosefson/merge-html.svg?branch=master)](https://travis-ci.org/hugojosefson/merge-html)
[![npm page](https://img.shields.io/npm/v/@hugojosefson/merge-html.svg)](https://npmjs.com/package/@hugojosefson/merge-html)
[![License MIT](https://img.shields.io/npm/l/@hugojosefson/merge-html.svg)](https://tldrlegal.com/license/mit-license)
[![SemVer 2.0.0](https://img.shields.io/badge/SemVer-2.0.0-lightgrey.svg)](https://semver.org/spec/v2.0.0.html)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

CLI and module for merging two or more `.html` files together.

## Prerequisite

Node.js, `v13.2.0` or higher, ideally at least `v14.0.0`.

Recommended to install latest via [nvm](https://github.com/nvm-sh/nvm#readme):

```bash
nvm install stable
```

## Usage

```bash
npx --package @hugojosefson/merge-html \
  merge-html input1.html input2.html [...inputN.html] \
  > output.html
```

Will merge all the input html files, and redirect the output to `output.html`.

### Minification

By default, the output HTML is minified using
[html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser) with
[DEFAULT_MINIFY_OPTIONS](#default-minify-options).

You may change it by setting the `MERGE_HTML_MINIFY` environment variable to a
boolean, or to a valid JSON object with configuration options. For example:

```bash
MERGE_HTML_MINIFY=false \
npx --package @hugojosefson/merge-html \
  merge-html input1.html input2.html > \
  non-minified.html
```

...or...

```bash
MERGE_HTML_MINIFY='{"decodeEntities": true, "keepClosingSlash": true, "maxLineLength": 80}' \
npx --package @hugojosefson/merge-html \
  merge-html input1.html input2.html > \
  special-minified.html
```

## Programmatic access

You can also `import` the module, and use its exported functions
programmatically.

### API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### merge

Merges two or more HTML strings together.

##### Parameters

- `htmls`
  **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**
  Array of HTML documents, each as a string.
- `minifyOptions`
  **([boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
  \|
  [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))**
  Can be `true`, `false` or an object with options for
  [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser).
  (optional, default `DEFAULT_MINIFY_OPTIONS`)

Returns
**[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
The resulting HTML document.

#### DEFAULT_MINIFY_OPTIONS

Default `minifyOptions` for `merge()`.

##### collapseBooleanAttributes

##### collapseWhitespace
