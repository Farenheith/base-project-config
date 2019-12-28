printf "{
    \"extends\": \"base-project-config/tslint.json\"
}
" > ./tslint.json
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
mkdir -p test
printf "{
    \"extends\": \"base-project-config/tslint.test.json\"
}
" > ./test/tslint.json
cp -f ./node_modules/base-project-config/.editorconfig ./.editorconfig
