create-configs
printf "{
    \"extends\": \"base-project-config/.nycrc.json\"
}
" > ./nycrc.json
printf "{
    \"extends\": \"base-project-config/tsconfig.json\"
}
" > tsconfig.json
printf "{
    \"extends\": \"base-project-config/tsconfig.test.json\"
}
" > tsconfig.test.json
cp -f ./node_modules/base-project-config/mocha.opts ./test/mocha.opts
