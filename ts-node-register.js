const fs = require('fs')
const baseDir = require('./bin/get-base-dir');
const tsConfig = `${baseDir}/tsconfig.test.json`;
const project = fs.existsSync(tsConfig) ?
	tsConfig :
	'./node_modules/base-project-config/tsconfig.test.json';
require('ts-node').register({ project });
