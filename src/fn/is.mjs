import SINGULAR_TAGS from '../const/singular-tags.mjs'

const is = node => a => a.node === node
export const isRoot = is('root') //       .child: []
export const isElement = is('element') // .tag: '', attr?: {}, child: []
export const isText = is('text') //       .text: ''
export const isElementWithTag = tag => a => isElement(a) && a.tag === tag
export const isSingularElement = item =>
  isElement(item) && SINGULAR_TAGS.includes(item.tag)
