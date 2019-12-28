const fs = require('fs')
const project = fs.existsSync('$PWD/tsconfig.ts.json') ?
	'$PWD/tsconfig.ts.json' :
	'./node_modules/base-project-config/tsconfig.test.json';
require('ts-node').register({ project });
