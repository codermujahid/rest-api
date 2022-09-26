
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');





/**
 * @desc get all users data
 * @name Get / api/v1/user/
 * @access public
 */


const getAllUser = (req, res ) => {
    // get user data form user json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));


    // send data
    res.status(200).json(users);

}

/**
 * @desc Creat a New User
 * @name POST / api/v1/user/
 * @access public
 */


const createUser = (req, res ) => {

    // get user data form user json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));


    //get body data
    const {name, skill} = req.body

    // validation
    if (!name || !skill ) {
        res.status(400).JSON({
            massage : "Name & Skill is required"
        })
    } else {
        users.push({
            id : Math.floor(Math.random() * 10000000000).toString(),
            name : name,
            skill  : skill
        });
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(201).json({
            massage : "User Created Successfully"
        })

    }



}

/**
 * @desc Get single User
 * @name Get / api/v1/user/:id
 * @access public
 */


const singleUser = (req, res ) => {

    // get user data form user json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));


   const singleUser = users.find( data => data.id == req.params.id );

   if (singleUser) {
    res.status(200).json(singleUser)
   } else {
    res.status(404).json({
        massage : "single User data not found"
    });
   }

}

/**
 * @desc delete User
 * @name DELETE / api/v1/user/:id
 * @access public
 */


const deleteUser = (req, res ) => {

    // get user data form user json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));


   if (users.some( data => data.id == req.params.id )) {
       const data = users.filter( data => data.id != req.params.id );
       writeFileSync(path.join(__dirname, '../db/users.json') , JSON.stringify(data));

       res.status(200).json({
        massage : "user delete success fully"
       })
   } else {
        res.status(401).json({

            massage : "user not found"

        })

   }

}/**
 * @desc update User
 * @name UPDATE / api/v1/user/:id
 * @access public
 */


const updateUser = (req, res ) => {

    // get user data form user json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // console.log();


   if (users.some( data => data.id == req.params.id )) {
       
    users[users.findIndex( data => data.id == req.params.id )] = {
        ... users[users.findIndex( data => data.id == req.params.id )],
        ...req.body
    };


       writeFileSync(path.join(__dirname, '../db/users.json') , JSON.stringify(users));

       res.status(200).json({
        massage : "user Update success fully"
       })
   } else {
        res.status(404).json({

            massage : "user Update not found"

        })

   }

}

//

module.exports = {
    getAllUser,
    createUser,
    singleUser,
    deleteUser,
    updateUser
}


