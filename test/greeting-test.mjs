/* eslint-env mocha */

import assert from 'assert'
import { generateGreeting } from '../src/index.mjs'

describe('generateGreeting', () => {
  it('should reject with an Error when called without argument', () => {
    assert.rejects(() => generateGreeting(), Error)
  })

  it('should return a Promise when called with argument', () =>
    assert.ok(typeof generateGreeting({ whom: 'World' }).then === 'function'))

  it('should resolve to a greeting longer than input', () =>
    generateGreeting({ whom: 'World' }).then(greeting =>
      assert.ok(greeting.length > 'World'.length)
    ))

  it('should resolve to a greeting containing input', () =>
    generateGreeting({ whom: 'World' }).then(greeting =>
      assert.ok(greeting.includes('World'))
    ))
})
