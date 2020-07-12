/**
 * Removes doctype from html, even if there is no linebreak after it.
 * @param html
 * @returns {string}
 */
export default html => html.replace(/<!doctype[^>]*\>(\n)?/i, '')
