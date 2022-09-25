
const { readFileSync } = require('fs');
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
    res.json(req.query);
}

//

module.exports = {
    getAllUser,
    createUser
}
