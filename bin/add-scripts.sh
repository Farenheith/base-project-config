npx npm-add-script \
  -k "lint" \
  -v "run-lint" \
  --force
npx npm-add-script \
  -k "build" \
  -v "run-build" \
  --force
npx npm-add-script \
  -k "build:dev" \
  -v "run-build-dev" \
  --force
npx npm-add-script \
  -k "test" \
  -v "run-test" \
npx npm-add-script \
  -k "test:coverage" \
  -v "run-test-coverage" \
  --force
npx npm-add-script \
  -k "test:coverage:lcovonly" \
  -v "run-test-lcov" \
  --force
