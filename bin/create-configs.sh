printf "{
    \"extends\": \"base-project-config/tslint.json\"
}
" > ./tslint.json
printf "{
    \"extends\": \"base-project-config/tslint.test.json\"
}
" > ./test/tslint.json
cp -f ./node_modules/base-project-config/.editorconfig ./.editorconfig
