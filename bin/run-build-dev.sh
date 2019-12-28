BASEDIR=[ -f ./.tsconfig.json ] && ./.tsconfig.json || ./node_modules/base-project-config/tsconfig.json
tsc -p $BASEDIR
