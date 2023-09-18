#!/usr/bin/node

/*
Write a script that prints the number of movies where the character “Wedge Antilles” is present.
The first argument is the API URL of the Star wars API: https://swapi-api.hbtn.io/api/films/
Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
You must use the module request
*/

const request = require('request');

if (process.argv.length === 3) {
  const url = process.argv[2];
  request(url, function (error, response, body) {
    if (error) {
      console.error(error);
      return;
    }
    let count = 0;
    const films = JSON.parse(body).results;
    films.forEach((film) => {
      film.characters.forEach((character) => {
        if (character.endsWith('/18/')) {
          count++;
        }
      });
    });
    console.log(count);
  });
} else {
  console.log('Usage: ./4-starwars_count.js <API URL>');
}
