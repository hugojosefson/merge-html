import hmt from 'html-minifier-terser'
import h2j from 'html2json'
import mergeTwo from './merge-two.mjs'

const { html2json, json2html } = h2j
const { minify } = hmt

export const DEFAULT_MINIFY_OPTIONS = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
}

export default (htmls, minifyOptions = DEFAULT_MINIFY_OPTIONS) =>
  minify(
    '<!doctype html>' + json2html(htmls.map(html2json).reduce(mergeTwo)),
    minifyOptions
  )
