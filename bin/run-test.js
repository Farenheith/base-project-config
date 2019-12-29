#!/usr/bin/env node

'use strict';

const fs = require('fs');
let spliceIndex = 2;

if (!fs.existsSync(`${process.env.PWD}/test/.mocha.opts`)) {
    process.argv.splice(spliceIndex, 0, '--opts', './node_modules/base-project-config/mocha.opts');
    spliceIndex += 2;
}
const mochaSetup = `${process.env.PWD}/test/.mocha.setup`;
if (fs.existsSync(mochaSetup)) {
    const setups = fs.readFileSync(mochaSetup).toString().split(/(\n|\r\n)/);
    for (const setup of setups) {
        if (!setup.match(/(#.+|^\n|^$)/)) {
            console.log(`Adding setup ${setup}`);
            process.argv.splice(spliceIndex, 0, setup);
            spliceIndex++
        }
    }
}
process.argv.push('--recursive', './test/**/*.spec.ts');
console.log(__dirname);
console.log(`exec mocha w/ args:`, process.argv.slice(2));
require('../../mocha/lib/cli').main();
