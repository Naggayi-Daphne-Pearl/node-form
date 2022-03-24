// route will specify a path on your web browser

const express = require('express')
const router = express.Router(); 

//create an object that will create instances of signing up  
const Signup = require('../models/signupmodel'); 
// validating code from database
const expressValidator = require('express-validator'); 

// router to validate our data 
router.use(expressValidator());

// Router is an instance of an object . is an object
// we are getting information from path /signUp
router.get('/signup', (req,res) => {
    // we are asking the server to give us information from signUp pug 
    res.render('signUp')
});

// posting data from the form of the signup method in signup.pug
router.post('/signup', (req,res) =>{
    // creating a variable that picks the body of the field like username
    const username = req.body.username; 
    const password = req.body.password; 
    const confirmpassword = req.body.confirmpassword; 
    
    // validating 
    // notEmpty is a function that makes sure the fields are entered. equivalent to required in html. 
    req.checkBody('username', 'enter user name').notEmpty();
    req.checkBody('password', 'enter password').notEmpty();
    req.checkBody('confirmpassword', 'confirm password').notEmpty; 
    
    // 
    let error = req.validationErrors();
    if(error){
        res.render('signup');
    }
    // registering new users to the database
    else {
        let newUser = new Signup({
            username: username, 
            password: password, 
            confirmpassword: confirmpassword
        });

        // saving the new user

        newUser.save((err)=>{
            if(err){
                console.error(err)
                return;
            } 
            else {
                console.log('new user registered');
                res.redirect('/signup');
            }
        })
    }
})




// gives access to someone to access our router
module.exports = router; 
