const baseDir = __dirname.substring(0, __dirname.lastIndexOf('/node_modules/'));
process.argv.push('-p', `${baseDir}/node_modules/base-project-config/gulpfile-clear.js`);

require(`${baseDir}/node_modules/gulp/bin/gulp`);
