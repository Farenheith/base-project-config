const fs = require('fs');

const baseDir = require('./get-base-dir');
process.argv.push('-p', !fs.existsSync('./tsconfig.json') ? './tsconfig.json' :
	`${baseDir}/node_modules/base-project-config/tsconfig.json`);

require(`${baseDir}/node_modules/tslint/bin/tslint`);
