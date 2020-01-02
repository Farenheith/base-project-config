#!/usr/bin/env node
var npmAddScript = require('npm-add-script');

npmAddScript({ key: 'lint', value: 'run-lint'})
npmAddScript({ key: 'prebuild', value: 'run-pre-build'})
npmAddScript({ key: 'build', value: 'run-build'})
npmAddScript({ key: 'test:coverage', value: 'run-test-coverage'})
npmAddScript({ key: 'test:coverage:lcovonly', value: 'run-test-lcov'})
npmAddScript({ key: 'test:coverage:json', value: 'run-test-json'})
npmAddScript({ key: 'test', value: 'run-test'})
