import hmt from 'html-minifier-terser'

export default (html, options = DEFAULT_MINIFY_OPTIONS) => {
  if (options === false) {
    return html
  }
  if (options === true) {
    return hmt.minify(html, DEFAULT_MINIFY_OPTIONS)
  }
  return hmt.minify(html, options)
}

/**
 * Default `minifyOptions` for `merge()`.
 */
export const DEFAULT_MINIFY_OPTIONS = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
}
