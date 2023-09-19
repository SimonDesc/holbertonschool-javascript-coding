#!/usr/bin/node
/*
Write a script that prints all characters of a Star Wars movie:

The first argument is the Movie ID - example: 3 = “Return of the Jedi”
Display one character name by line
You must use the Star wars API
You must use the module request

./100-starwars_characters.js 3
*/

const request = require('request');
const URL = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(URL, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const obj = JSON.parse(body);

  const listCharacters = obj.characters;

  for (const characterUrl of listCharacters) {
    request(characterUrl, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      }
      const objCharacters = JSON.parse(body);
      console.log(objCharacters.name);
    });
  }
});
