const fs = require('fs')
const project = fs.exists('$PWD/tsconfig.ts.json') ?
	'$PWD/tsconfig.ts.json' :
	'./node_modules/base-project-config/tsconfig.test.json';
require('ts-node').register({ project });
