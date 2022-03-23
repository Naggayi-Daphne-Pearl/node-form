// Routing refers to how an application's endpoints (URIs) respond to client request
 const express = require('express'); 
 const route = express.Router(); 

 const Login = require ('../models/loginmode'); 
 // express validator creates a validation chain for one or more fields
 const expressValidator = require('express-validator'); 
const router = require('./signuproute');

 router.use(expressValidator()); 

 router.get('/login', (req,res) => {
     res.render('login')
 });

// router.post('/login', (req,res) => {
//     const username = req.body.username; 
//     const password = req.body.password; 
// })

req.checkBody('username', 'enter user name').notEmpty(); 
req.checkBody('password', 'fill in correct password').notEmpty(); 

let error = req.validationErrors(); 
if(error){
    res.render('login'); 
}
else{
    let user = new Login ({
        username: username,
        password: password
    })
    user.save((err)=> {
     if(err){
         console.error(err)
         return;
     }
     else {
         console.log('successfull log in');
         res.redirect('/login'); 
     }   
    })
}

module.exports = router; 
