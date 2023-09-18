#!/usr/bin/node

/*
Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
The first argument is the movie ID
You must use the Star wars API with the endpoint https://swapi-api.hbtn.io/api/films/:id
You must use the module request
*/

const request = require('request');
const id = process.argv[2];
const URL = 'https://swapi-api.hbtn.io/api/films/' + id;

request(URL, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const movie = JSON.parse(body);

  console.log(movie.title);
});
