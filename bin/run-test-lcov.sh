npm run lint && \
    [ -f .nycrc.json ] && [ -f .nycrc ] && [ -f .nycrc.yaml ] && [ -f .nycrc.yml ] && [ -f nyc.config.js ] && \
        nyc run-test || \
        nyc --nycrc-path=./node_modules/base-project-config/.nycrc.json run-test

