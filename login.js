// Controller file 
const express = require('express'); 
const mongoose = require ('mongoose'); 
const bodyParser = require('body-parser')
const path = require ('path')
const expressValidator = require ('express-validator');
const flash = require ('connect-flash')
const passport = require ('passport')
const expressSession = require ('express-session'); 

const config = require('./config/database'); 
const database = require('./config/database'); 
const db = mongoose.connect(config.database); 

const application = express(); 
const register = require('./routes/loginroute'); 
db.once('open', () => {
    console.log('connected to the log in');
}); 

db.