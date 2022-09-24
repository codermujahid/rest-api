 
[![Express Logo](/public/image/img.png)](http://expressjs.com/)


Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org).

[![Express Logo](/public/image/1.svg)](https://packagephobia.com/result?p=express)
[![Express Logo](/public/image/1.svg)](https://npmcharts.com/compare/express?minimal=true)
[![Express Logo](/public/image/1.svg)](https://www.npmjs.com/package/express)
 

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


 
