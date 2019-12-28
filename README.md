# base-project-config

A project with basic configuration for reusing in another ones.

## How it works

All common needed packages are loaded with this project by dependency, and there is pre-configures npm-scripts so you don't need to write it all by yourself.
This is ideal for project with this characteristics:

* using typescript language;
* using mocha, sinon, chai triad;
* using editorconfig extendions for vscode;
* using nyc for validating coverage;
* using tslint to ensure sintax;

Look that, if all of this is a must have for you, installing base-project-config will put all this packages automatically in your project with a default recommended configuration, making the creating of new project much easier.

## How to install it?

```batch
npm install --save-dev base-project-config
```

## How to setup project

This command will:
* add all scripts supported by this package to your package.json
* create required configuration files

```batch
npx setup-project
```
## How to just create required the config files?

This command will:
* create .editorconfig
* create tslint.json
* create test/tslint.json

## How to create all the config files?

You don't need to do it, as all the default config files can be getted from the package by the npm-scripts, but if you want to customize something, this command will:
* create all the required config files
* create tsconfig.json
* create tsconfig.test.json
* create tsconfig.test.json
* create .nycrc.json

```batch
npx create-configs
```

## How to just create add all scripts?

This command will:
* add lint script, that runs tslint against your project;
* add build:dev script, that just build your project without additional validation;
* add build script, that runs lint and build:dev;
* add test script, that runs mocha against your project;
* add test:coverage script, that runs nyc and mocha against your project;
* add test:coverage:lcovonly script, that runs lint, nyc generating only lcov report and mocha agains your project (useful for pipelines);

```batch
npx add-scripts
```

### About test script

The test script runs mocha with a default mocha.opts, where all test/**/*.spec.ts in your project will be ran. Also, before all tests, this script runs a default setup where sinon.restore() is setted after each test case, so you don't have to do it by yourself.
It is recommended, so, to not use sinon.sandbox(), as no test will ran in parallel and mocks with sinon.stub() and similars will be resetted after each test.

Additionaly to test script, if you want to add some setup file before your tests, just change the script specifying it by parameters, like this:

```json
"test": "run-test my-setup-test.ts",
```

This is useful if you want to use a lib, like sinon-chai, and want to setup it to all your test once
