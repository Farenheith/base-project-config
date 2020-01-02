#!/usr/bin/env node

'use strict';

const fs = require('fs');
const baseDir = __dirname.substring(0, __dirname.lastIndexOf('/node_modules/'));
if (!fs.existsSync(`${baseDir}/node_modules/test/.mocha.opts`)) {
    process.argv.push('--opts', './node_modules/base-project-config/mocha.opts');
}
const mochaSetup = `${baseDir}/test`;
const setups = fs.readdirSync(mochaSetup)
for (const setup of setups) {
    if (setup.match(/.*setup\.spec\.ts/)) {
        process.argv.push(`test/${setup}`);
    }
}
process.argv.push('--recursive', './test/**/*.spec.ts');
console.log(`exec mocha w/ args:`, process.argv.slice(2));
require(`${baseDir}/node_modules/mocha/bin/_mocha`);
