const fs = require('fs');

const baseDir = __dirname.substring(0, __dirname.lastIndexOf('/node_modules/'));
if (!fs.existsSync(`${baseDir}/tsconfig.json`)) {
	process.argv.push('-p', `${baseDir}/node_modules/base-project-config/tsconfig.json`);
}

require(`${baseDir}/node_modules/typescript/bin/tsc`);
