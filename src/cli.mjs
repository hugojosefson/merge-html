#!/usr/bin/env node

import yargs from 'yargs'
import termSize from 'term-size'
import { generateGreeting, identity } from './index.mjs'
import greet from './yargs-commands/greet.mjs'

yargs
  .strict()
  .command(greet({ generateGreeting, identity }))
  .demandCommand(1)
  .help()
  .wrap(termSize().columns)
  .parse()
