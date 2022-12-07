#!/bin/bash
deno run --allow-net ./server/server.ts &
DENO_PID=$!
sleep .5
NC='\0033[0m'
    BPURPLE='\033[1;35m'
    BGREEN='\033[1;32m'
    
GET=$(curl -s localhost:3000/books)
    echo -e "${BPURPLE}GET to '/books': ${NC}$GET"
    
kill $DENO_PID