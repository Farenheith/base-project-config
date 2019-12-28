BASEDIR=[ -f ./.tsconfig.json ] && ./.tsconfig.json || ./node_modules/base-project-config/tsconfig.json
tslint --project $BASEDIR
