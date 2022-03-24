// CONTROLLER FILE !!!!!

const express = require('express'); 
const mongoose = require ('mongoose'); 
const bodyParser = require('body-parser')
const path = require ('path')
const expressValidator = require ('express-validator');
const flash = require ('connect-flash')
const passport = require ('passport')
const expressSession = require ('express-session'); 

// connects to the database
// you dont need the extension 
const config = require ('./config/database'); 
// declaring database variable
const database = require('./config/database')

// database instance for mongoose
const db = mongoose.connection; 
// inheriting a connection from mongoose
mongoose.connect(config.database)

// creating a real controller which will manage the instances
//this will inherit express functions
const application = express(); 

// we are creating a variable, that will be our route into our controller
const register = require('./routes/signuproute');

// this means once you open succcessfully, print connected successfully
db.once('open', () => {
    console.log('connected successfully');
})

// once it opens and there is an error show error. err is a keyword
db.once('error', (err) => {
    console.log(err);
})

// setting the view engine. this will help view our pug on the browser
application.engine('pug', require('pug').__express); 
application.set('view engine', 'pug'); 
application.set('views', path.join(__dirname,'views'))

// body parser middle-ware section. focuses on the fields have been required
application.use(bodyParser.urlencoded({extended:false})); 
application.use(bodyParser.json());

// setting a directory for static files css bootstrap so that we dont have always specify the path
application.use(express.static(path.join(__dirname, 'public')));

// connecting our application declared in routes
application.use('/', register); 

// creating a port for the information to pass from the front end to the backend 
application.listen (4000, () => {
    console.log('listening at port 4000');
})

