[ -f ./.tsconfig.json ] && \
    tslint --project ./tsconfig.json || \
    tslint --project ./node_modules/base-project-config/tsconfig.json
