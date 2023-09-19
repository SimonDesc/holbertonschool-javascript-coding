#!/usr/bin/node

/*
Write a script that gets the contents of a webpage and stores it in a file.
The first argument is the URL to request
The second argument the file path to store the body response
The file must be UTF-8 encoded
You must use the module request
*/

// ./5-request_store.js http://loripsum.net/api loripsum
const request = require("request");
const fs = require("fs");
const URL = process.argv[2];
const filePath = process.argv[3];

console.log(filePath);

request(URL, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(filePath, body, "utf-8", (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
