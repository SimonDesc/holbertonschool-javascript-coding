#!/usr/bin/node

/*
Write a script that prints all characters of a Star Wars movie:

The first argument is the Movie ID - example: 3 = “Return of the Jedi”
Display one character name by line in the same order of the list “characters” in the /films/ response
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

  const charactersName = {};
  let completedRequests = 0;
  const totalRequests = listCharacters.length;

  for (const characterUrl of listCharacters) {
    request(characterUrl, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      } else {
        const id = characterUrl.match(/(\d+)\/?$/); // expression reguliere qui retourne un tableau avec l'id en 1
        const objCharacters = JSON.parse(body);
        charactersName[id[1]] = objCharacters.name;
      }

      completedRequests++;
      if (completedRequests === totalRequests) {
        for (const cle in charactersName) {
          console.log(charactersName[cle]);
        }
      }
    });
  }
});
