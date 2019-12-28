[ -f ./tsconfig.json ] && \
    tsc || \
    tsc -p ./node_modules/base-project-config/tsconfig.json
