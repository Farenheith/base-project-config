BASEDIR=[ -f ./.nycrc.json ] && ./.nycrc.json || ./node_modules/base-project-config/.nycrc.json
nyc --nycrc-path=$BASEDIR run-test
