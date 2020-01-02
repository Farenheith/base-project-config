const fs = require('fs');

const baseDir = __dirname.substring(0, __dirname.lastIndexOf('/node_modules/'));
process.argv.push('-p', !fs.existsSync('./tsconfig.json') ? './tsconfig.json' :
	`${baseDir}/node_modules/base-project-config/tsconfig.json`);

require(`${baseDir}/node_modules/tslint/bin/tslint`);
