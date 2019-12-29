#!/usr/bin/env node

'use strict';

const args = process.argv;
const fs = require('fs');

if (fs.existsSync('./test/.mocha.opts')) {
    process.argv = [];
} else {
    process.argv = ['--opts', './node_modules/base-project-config/mocha.opts'];
}

if (args && args.length > 0) {
    args.forEach(x => process.argv.push(x));
}
process.push('./test/**/*.spec.ts',
    '--recursive', './test/**/*.spec.ts');

debug(`exec ${process.execPath} w/ args:`, process.argv);
require('./node_modules/mocha').main();
