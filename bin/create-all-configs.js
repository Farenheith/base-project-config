#!/usr/bin/env node
require(`${baseDir}/create-configs`);
const fs = require('fs');
const baseDir = require(`${baseDir}/get-base-dir`);

fs.writeFileSync(`${baseDir}/.nycrc.json`, `{
	"extends": "base-project-config/.nycrc.json"
}`);

fs.writeFileSync(`${baseDir}/tsconfig.json`, `{
	"extends": "base-project-config/tsconfig.json"
}`);

fs.writeFileSync(`${baseDir}/tsconfig.test.json`, `{
	"extends": "base-project-config/tsconfig.test.json"
}`);
