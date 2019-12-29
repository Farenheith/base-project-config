#!/usr/bin/env node

'use strict';

const fs = require('fs');
let spliceIndex = 2;
const baseDir = __dirname.substring(0, __dirname.lastIndexOf('/node_modules/'));
console.log(baseDir);
if (!fs.existsSync(`${baseDir}/node_modules/test/.mocha.opts`)) {
    process.argv.splice(spliceIndex, 0, '--opts', './node_modules/base-project-config/mocha.opts');
    spliceIndex += 2;
}
const mochaSetup = `${baseDir}/test`;
const setups = fs.readdirSync(mochaSetup)
for (const setup of setups) {
    if (setup.match(/.*setup\.spec\.ts/)) {
        process.argv.splice(spliceIndex, 0, `test/${setup}`);
        spliceIndex++
    }
}
process.argv.push('--recursive', './test/**/*.spec.ts');
require(`${baseDir}/node_modules/mocha/lib/cli`).main();
