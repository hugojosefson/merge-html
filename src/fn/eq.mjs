import assert from 'assert'

export default (a, b) => {
  try {
    assert.deepStrictEqual(a, b)
  } catch (ignored) {
    return false
  }
  return true
}
