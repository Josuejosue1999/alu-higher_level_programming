#!/usr/bin/node
const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API Error:', response.statusCode);
  } else {
    const films = JSON.parse(body).results;
    const count = films.filter((film) => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length;
    console.log(count);
  }
});
