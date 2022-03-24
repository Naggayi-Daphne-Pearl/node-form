// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 

// creating a schema
const registerSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    confirmpassword: {
        type: String, 
        required: true
    }
});

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Signup', registerSchema);