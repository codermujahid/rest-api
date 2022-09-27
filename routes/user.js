
const express = require('express');
const { getAllUser, createUser, singleUser, deleteUser, updateUser } = require('../controllers/userController');




 // API routs
 const router = express.Router();



 // users routes 
 router.route('/').get(getAllUser).post(createUser);
 router.route('/:id').get(singleUser).delete(deleteUser).put(updateUser).patch();



 
 // exports router
 module.exports = router;
 


