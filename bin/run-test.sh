[ -f ./test/.mocha.opts ] && \
    mocha $1 --recursive ./test/**/*.spec.ts || \
    mocha --opts ./node_modules/base-project-config/mocha.opts $1 --recursive ./test/**/*.spec.ts
