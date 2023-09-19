#!/usr/bin/node
/*
Write a script that computes the number of tasks completed by user id.

    The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
    Only print users with completed task
    You must use the module request
*/

const URL = process.argv[2];
const request = require('request');

request(URL, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const todos = JSON.parse(body);
  const taskCounts = {};

  for (const todo of todos) {
    if (todo.completed) {
      if (!taskCounts[todo.userId]) {
        taskCounts[todo.userId] = 0;
      }
      taskCounts[todo.userId]++;
    }
  }

  for (const userId in taskCounts) {
    if (taskCounts[userId] === 0) {
      delete taskCounts[userId];
    }
  }

  console.log(taskCounts);
});
