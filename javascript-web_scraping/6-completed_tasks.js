#!/usr/bin/node
/*
Write a script that computes the number of tasks completed by user id.

    The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
    Only print users with completed task
    You must use the module request
*/

const URL = process.argv[2];
const request = require('request');
let count = 0;
const dict = {};
let oldID = 0;

request(URL, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  const obj = JSON.parse(body);

  for (const item of obj) {
    const id = item.userId;
    if (oldID !== id) {
      count = 0;
    }

    if (item.completed === true) {
      count += 1;
      dict[id] = count;
    }

    oldID = id;
  }

  console.log(dict);
});
