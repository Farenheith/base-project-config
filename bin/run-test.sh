if [ -f ./test/.mocha.opts ]; then
    echo "mocha $1 --recursive ./test/**/*.spec.ts"
    mocha $1 --recursive ./test/**/*.spec.ts
else
    echo "mocha --opts ./node_modules/base-project-config/mocha.opts $1 --recursive ./test/**/*.spec.ts"
    mocha --opts ./node_modules/base-project-config/mocha.opts $1 --recursive ./test/**/*.spec.ts
fi
