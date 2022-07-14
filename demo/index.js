import apply from '../src/library.js'
import { inspect } from 'util'
import rules from './rules.js'
import instances from './instances.js'
import handlers from './handlers.js'

console.log('\n>> RULES (REFERENCE) '.padEnd(process.stdout.columns, '>'))

console.log(inspect(
	rules,
	{ showHidden: false, depth: null, colors: true }
))

console.log('\n>> INSTANCES '.padEnd(process.stdout.columns, '>'))

console.log(inspect(
	instances,
	{ showHidden: false, depth: null, colors: true }
))


console.log('\n>> RESULT '.padEnd(process.stdout.columns, '>'))

console.log(inspect(
	apply(instances, rules, handlers),
	{ showHidden: false, depth: null, colors: true }
))