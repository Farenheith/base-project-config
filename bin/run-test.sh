BASEDIR=./node_modules/base-project-config/mocha.opts
mocha --opts $BASEDIR $1 --recursive ./test/**/*.spec.ts
