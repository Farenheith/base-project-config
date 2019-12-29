printf "{
    \"extends\": \"base-project-config/tslint.json\"
}
" > ./tslint.json
mkdir -p test
mkdir -p src
[ -f src/index.ts ] || echo "" > ./src/index.ts
printf "{
    \"extends\": \"base-project-config/tslint.test.json\"
}
" > ./test/tslint.json
cp -f ./node_modules/base-project-config/.editorconfig ./.editorconfig
