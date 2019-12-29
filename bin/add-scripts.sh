npx npm-add-script \
  -k "lint" \
  -v "run-lint" \
  -f
npx npm-add-script \
  -k "build" \
  -v "run-build" \
  -f
npx npm-add-script \
  -k "build:dev" \
  -v "run-build-dev" \
  -f
npx npm-add-script \
  -k "test:coverage" \
  -v "run-test-coverage" \
  -f
npx npm-add-script \
  -k "test:coverage:lcovonly" \
  -v "run-test-lcov" \
  -f
npx npm-add-script \
  -k "test" \
  -v "run-test" \
