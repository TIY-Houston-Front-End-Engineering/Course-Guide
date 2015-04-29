#!/bin/sh
usernames=("aallen-dev" "bmagnantb" "arbolkiri" "dorshinho" "Jrharper0592" "cjros" "pmarsh41" "maprules1000" "firehawk09" "kawill")

for i in "${usernames[@]}"
do
    :
    sleep .25
    open "https://github.com/$i"
done