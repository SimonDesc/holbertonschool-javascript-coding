#!/usr/bin/node

/*
Write a script that prints the number of movies where the character “Wedge Antilles” is present.
The first argument is the API URL of the Star wars API: https://swapi-api.hbtn.io/api/films/
Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
You must use the module request
*/

const request = require('request');
const URL = process.argv[2];

let count = 0;

request(URL, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const obj = JSON.parse(body);

  for (let i = 0; i < obj.results.length; i++) {
    for (const key in obj.results[i]) {
      if (key === 'characters') {
        const listChar = obj.results[i][key];
        for (let i = 0; i < listChar.length; i++) {
          if (listChar[i].slice(-3).includes('18')) {
            count += 1;
          }
        }
      }
    }
  }
  console.log(count);
});
