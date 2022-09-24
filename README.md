## REST API with Express Server

This is our first REST API  for React js App.

## First clone this  repo and then instal its packages

```console
$ npm install
```

## Server structure

```js
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

 // init environment variable
 const  PORT = process.env.port || 8080;

 // express init
 const app = express();




 // express milloewares
 app.use(express.json());
 app.use(express.urlencoded( { extended : false}));


 // listen port 
 app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgWhite.black);
 });


```
