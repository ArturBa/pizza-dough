#!/bin/sh

RECIPE_LIST_FILE="src/assets/data/list.json"

get_recipe_title() {
  grep -ohP '(?<="title": ").*(?=")' "$1"
}

get_recipe_oven() {
  grep -ohP '(?<="oven": ").*(?=")' "$1"
}

get_recipe_style() {
  grep -ohP '(?<="style": ").*(?=")' "$1"
}


echo "[" > $RECIPE_LIST_FILE
for file in src/assets/data/recipes/*.json
do
    id=$(echo "$file" | grep -oe '[0-9]*')
    (
      printf '{\n'
      printf '\t"id": "%s",' "$id"
      printf '\t"title": "%s",' "$(get_recipe_title "$file")"
      printf '\t"oven": "%s",' "$(get_recipe_oven "$file")"
      printf '\t"style": "%s"' "$(get_recipe_style "$file")"
      printf '},'
    ) >> $RECIPE_LIST_FILE
done

echo "]" >> $RECIPE_LIST_FILE
