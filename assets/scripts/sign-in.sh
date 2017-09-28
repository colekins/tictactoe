API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-in/"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data-urlencode '{
    "credentials": {
      "email": "'"cole1"'",
      "password": "'"cole1"'"
    }
  }'

echo
