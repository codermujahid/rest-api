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


[![Express Logo](/public/image/img.png)](http://expressjs.com/)


Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org).

 
[![An old rock in the desert](/public/image/img.png.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
