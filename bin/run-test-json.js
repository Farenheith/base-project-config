#!/usr/bin/env node
const baseDir = require('./get-base-dir');
process.argv.push('--reporter=json');
require('./run-test-coverage');
