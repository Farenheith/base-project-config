BASEDIR=[ -f ./.nycrc.json ] && ./.nycrc.json || ./node_modules/base-project-config/.nycrc.json
npm run lint && nyc --nycrc-path=$BASEDIR --reporter=lcovonly run-test
