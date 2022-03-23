// Model file 
// MODEL FILE SHOWS HOW OUR DATA WILL LOOK LIKE IN THE DATABASE 
const mongoose = require('mongoose');

// creating a schema
// a schema defines the shape of documents inside a particular collection.
const registerSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true; 
    },
    password: {
        type: String, 
        required: true
    }
}); 

// exporting information to database
module.exports = mongoose.model('', registerSchema);