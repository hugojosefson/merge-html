import h2j from 'html2json'
import { default as minify, DEFAULT_MINIFY_OPTIONS } from './fn/minify.mjs'
import mergeTwo from './merge-two.mjs'
import removeDoctype from './fn/remove-doctype.mjs'

const { html2json, json2html } = h2j

/**
 * Merges two or more HTML strings together.
 * @param {string[]} htmls Array of HTML documents, each as a string.
 * @param {boolean|Object} minifyOptions Can be `true`, `false` or an object with options for [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser).
 * @returns {string} The resulting HTML document.
 */
export default (htmls, minifyOptions = DEFAULT_MINIFY_OPTIONS) =>
  minify(
    '<!DOCTYPE html>' +
      json2html(htmls.map(removeDoctype).map(html2json).reduce(mergeTwo)),
    minifyOptions
  )
