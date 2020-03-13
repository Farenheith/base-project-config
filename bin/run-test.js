#!/usr/bin/env node
const fs = require('fs');
const baseDir = require('./get-base-dir');
const mochaSetup = `${baseDir}/test`;
const setups = fs.readdirSync(mochaSetup)
process.argv.push(`${baseDir}/node_modules/setup.spec.js`);
for (const setup of setups) {
    if (setup.match(/.*setup\.spec\.ts/)) {
        process.argv.push(`test/${setup}`);
	}
}
process.argv.push('--recursive', './test/**/*.spec.ts');
console.log(`exec mocha w/ args:`, process.argv.slice(2));
require(`${baseDir}/node_modules/mocha/bin/_mocha`);
