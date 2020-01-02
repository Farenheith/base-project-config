npm run lint && \
    [ -f .nycrc.json ] && [ -f .nycrc ] && [ -f .nycrc.yaml ] && [ -f .nycrc.yml ] && [ -f nyc.config.js ] && \
        nyc npm test || \
        nyc --reporer=lcovonly --nycrc-path=./node_modules/base-project-config/.nycrc.json npm test

