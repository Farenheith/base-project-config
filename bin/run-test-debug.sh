[ -f ./test/.mocha.opts ] && \
    ${workspaceFolder}/node_modules/.bin/_mocha $1 --recursive ./test/**/*.spec.ts || \
    ${workspaceFolder}/node_modules/.bin/_mocha --opts ./node_modules/base-project-config/mocha.opts $1 --recursive ./test/**/*.spec.ts
