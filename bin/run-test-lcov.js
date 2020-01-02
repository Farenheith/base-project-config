#!/usr/bin/env node
process.argv.push('--reporter=lcovonly');
require('./run-test-coverage');
