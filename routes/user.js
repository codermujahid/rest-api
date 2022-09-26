
const express = require('express');
const { getAllUser, createUser } = require('../controllers/userController');




 // API routs
 const router = express.Router();


 // users routes
 router.get('/' , getAllUser);
 router.post('/' , createUser);

 // exports router
 module.exports = router;
 


