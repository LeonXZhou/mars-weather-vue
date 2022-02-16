# Tarot Vue
A simple frontend SPA built using axios and Vue.js framework.

Heroku deployment: [https://tarot-vue-frontend.herokuapp.com/](https://tarot-vue-frontend.herokuapp.com/)

## Features:
### Cards:
Users can select a tarot reading of 1, 3, or 5 cards. Each individual card can be flippe over
!["Readings"](https://github.com/LeonXZhou/tarot-vue/blob/master/screenshots/Screenshot%20from%202022-02-15%2022-52-17.png)
### Live Search:
Users can search for cards based on their names
!["Live Search"](https://github.com/LeonXZhou/tarot-vue/blob/master/screenshots/Screenshot%20from%202022-02-15%2022-50-51.png)

## Run Locally
run npm install in root directory. then node server.js. Static vue build will be served at localhost:8080

## Dependencies
### Frontend
- Vue.js
- Axios
### Backend
the frontend app is making request to [rws-cards-api](https://rws-cards-api.herokuapp.com/)
