printf "{
    \"extends\": \"base-project-config/tslint.json\"
}
" > ./tslint.json
mkdir -p test
printf "{
    \"extends\": \"base-project-config/tslint.test.json\"
}
" > ./test/tslint.json
