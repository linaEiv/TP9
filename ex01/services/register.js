
const Users = require("../models/users");

const register = async (parame) => {
    try {
        const {

            username,
            firstname,
            lastname,
            email,
            password
        } = parame;

        console.log(parame);
        // read all users 
        const existed = await Users.findOne({ email });
        if (existed) {
            throw "This user already exist";
        }

        // check if user exists
        const newUser = {
            email,
            username,
            firstname,
            lastname,
            password
        }

        // insert data to db
        const createdUser = await Users.create(newUser);
        return createdUser
    } catch (err) {
        return {
            success: false,
            error: err || 'error'
        }
    }
}
module.exports = {
    register,
}