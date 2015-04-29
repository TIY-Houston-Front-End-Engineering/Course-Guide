#!/bin/sh
usernames=("https://medium.com/@bmagnantb" "https://medium.com/@Arbolkiri" "https://medium.com/@lemilkchocolat" "https://medium.com/@Jrharper0592" "https://medium.com/@chrisonthe7" "https://medium.com/@Allmarsh713" "https://medium.com/@MichaelPadon" "https://medium.com/@ralphycue" "https://medium.com/@kawomment")

for i in "${usernames[@]}"
do
    :
    sleep .25
    open "$i"
done