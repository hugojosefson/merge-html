import SINGULAR_TAGS from './const/singular-tags.mjs'
import {
  isElement,
  isElementWithTag,
  isRoot,
  isSingularElement,
  isText,
} from './fn/is.mjs'

import not from './fn/not.mjs'
import uniq from './fn/uniq.mjs'
import eq from './fn/eq.mjs'

const mergeArrays = (a = [], b = []) => {
  if (a.length === 0) {
    return b
  }
  if (b.length === 0) {
    return a
  }

  const inBoth = a.filter(aItem => b.find(bItem => eq(aItem, bItem)))
  const aUniques = a.filter(aItem => !inBoth.includes(aItem))
  const bUniques = b.filter(
    bItem => !inBoth.find(bothItem => eq(bItem, bothItem))
  )

  const singularTags = uniq(
    ...aUniques.filter(isSingularElement).map(({ tag }) => tag),
    ...bUniques.filter(isSingularElement).map(({ tag }) => tag)
  )
  const aUniquesNoSingular = aUniques.filter(not(isSingularElement))
  const bUniquesNoSingular = bUniques.filter(not(isSingularElement))
  const singularElements = singularTags
    .map(isElementWithTag)
    .map(isCurrentTag => merge(a.find(isCurrentTag), b.find(isCurrentTag)))

  return [
    ...singularElements,
    ...inBoth,
    ...aUniquesNoSingular,
    ...bUniquesNoSingular,
  ]
}

const mergeAttr = (a = {}, b = {}) => ({ ...a, ...b })
const mergeText = (a, b) => (a === b ? a : `${a}${b}`)
const merge = (a, b) => {
  if (a == null) {
    return b
  }
  if (b == null) {
    return a
  }
  if (eq(a, b)) {
    return a
  }

  if (a.node !== b.node) {
    throw new Error(
      `Unexpectedly different nodes: ${JSON.stringify({ a, b }, null, 2)}`
    )
  }

  if (isRoot(a) && isRoot(b)) {
    return {
      node: 'root',
      child: mergeArrays(a.child, b.child),
      attr: mergeAttr(a.attr, b.attr),
    }
  }
  if (isText(a) && isText(b)) {
    return { node: 'text', text: mergeText(a.text, b.text) }
  }

  if (isElement(a) && isElement(b)) {
    if (a.tag !== b.tag) {
      throw new Error(
        `Unexpectedly different elements: ${JSON.stringify({ a, b }, null, 2)}`
      )
    }
    return {
      node: 'element',
      tag: a.tag,
      child: mergeArrays(a.child, b.child),
      attr: mergeAttr(a.attr, b.attr),
    }
  }

  throw new Error(`Unexpected nodes: ${JSON.stringify({ a, b }, null, 2)}`)
}

export default merge
