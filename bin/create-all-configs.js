require('./create-configs');
const fs = require('fs');

fs.writeFileSync('./.nycrc.json', `{
	"extends": "base-project-config/.nycrc.json"
}`);

fs.writeFileSync('./tsconfig.json', `{
	"extends": "base-project-config/tsconfig.json"
}`);

fs.writeFileSync('./tsconfig.test.json', `{
	"extends": "base-project-config/tsconfig.test.json"
}`);

fs.copyFileSync('./node_modules/base-project-config/mocha.opts ', './test/mocha.opts');
