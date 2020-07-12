#!/usr/bin/env node
import envConfig from '@hugojosefson/env-config'
import fs from 'fs'
import { merge } from './index.mjs'

const { readFileSync } = fs

const args = Array.from(process.argv).slice(2)
if (args.length < 2) {
  throw new Error('Please provide at least two html files as arguments.')
}

const { MERGE_HTML_MINIFY } = envConfig()

const htmls = args.map(filename => readFileSync(filename, 'utf8'))
const result = merge(htmls, MERGE_HTML_MINIFY)
console.log(result)
