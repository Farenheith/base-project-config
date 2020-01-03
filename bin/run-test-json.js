#!/usr/bin/env node
const baseDir = require('./get-base-dir');
process.argv.push('--reporter=json');
require('./run-test-coverage');
require('fs').copyFileSync(`${baseDir}/coverage/coverage-final.json`,
	`${baseDir}/coverage/coverage.json`
);
