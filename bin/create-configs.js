const fs = require('fs');

fs.writeFileSync('./tslint.json', `{
	"extends": "base-project-config/tslint.json"
}`);

['./test', './src', './.vscode'].forEach(x => {
	if (!fs.existsSync(x)) {
		fs.mkdirSync(x);
	}
});

if (!fs.existsSync('src/index.ts')) {
	fs.writeFileSync('./src/index.ts', '');
}

fs.writeFileSync('./test/tslint.json', `{
	"extends": "base-project-config/tslint.test.json"
}`);

fs.copyFileSync('./node_modules/base-project-config/.editorconfig ', './.editorconfig');
fs.copyFileSync('./node_modules/base-project-config/.travis.yml', './.travis.yml');
fs.copyFileSync('./node_modules/base-project-config/launch.json', './.vscode/launch.json');
