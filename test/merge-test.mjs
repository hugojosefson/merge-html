/* eslint-env mocha */

import assert from 'assert'
import merge from '../src/index.mjs'

const indexModernHtml = `<!doctype html><html><head><meta charset="utf-8"><title>parcel-esmodule-example</title><meta name="viewport" content="width=device-width,user-scalable=yes,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="icon" href="favicon.ico"><link href="main.c62b3fd4fbb878fa00dd.css" rel="stylesheet"><script src="modern.main.42cefb9b31b02f0c1b4a.js" type="module"></script></head><body></body></html>`
const indexLegacyHtml = `<!doctype html><html><head><meta charset="utf-8"><title>parcel-esmodule-example</title><meta name="viewport" content="width=device-width,user-scalable=yes,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="icon" href="favicon.ico"><link href="main.c62b3fd4fbb878fa00dd.css" rel="stylesheet"><script src="legacy.main.0dc1932e97394d0c8e4f.js" async nomodule></script></head><body></body></html>`

const expectedHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>parcel-esmodule-example</title><meta name="viewport" content="width=device-width,user-scalable=yes,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="icon" href="favicon.ico"><link href="main.c62b3fd4fbb878fa00dd.css" rel="stylesheet"><script src="modern.main.42cefb9b31b02f0c1b4a.js" type="module"></script><script src="legacy.main.0dc1932e97394d0c8e4f.js" async nomodule=""></script></head><body></body></html>`

describe('merge', () => {
  it('merges two example html files', () => {
    assert.strictEqual(merge([indexModernHtml, indexLegacyHtml]), expectedHtml)
  })
})
