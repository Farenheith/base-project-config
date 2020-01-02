#!/usr/bin/env node
process.argv.push('--reporter=json');
require('./run-test-coverage');
