https://youtu.be/5gLZ0Xzzmds?si=gBcMBJfwXb5mIOma

"type": "module",

npm init -y
npm i express pg dotenv
npm i -D nodemon


import 'dotenv/config';
import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


mkdir controllers
mkdir database
mkdir middlewares
mkdir models
mkdir routes

database:
  connection.db.js
