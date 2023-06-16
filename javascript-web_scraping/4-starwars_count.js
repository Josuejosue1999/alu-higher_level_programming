#!/usr/bin/node
// A script that prints the number of movies where the character Wedge Antilles is present

const args = process.argv;
const apiURL = args[2];
const request = require('request');

request(apiURL, function (error, response, body) {
  if (error) {
    console.error('Error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    const { results } = data;
    let filmCount = 0;

    for (const result of results) {
      const { characters } = result;

      for (const character of characters) {
        const check18 = character.endsWith('18/');

        if (check18) {
          filmCount++;
        }
      }
    }

    console.log(filmCount);
  }
});
