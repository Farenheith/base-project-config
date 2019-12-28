[ -f ./tsconfig.json ] && \
    tsc || \
    tsc ./node_modules/base-project-config/tsconfig.json
