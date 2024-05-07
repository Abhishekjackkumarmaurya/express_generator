var express = require('express');
var router = express.Router();
const userModel=require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  userModel.create({
    username:"Abhishek Maurya",
    email:"abhi@a.com",
    age:20
  }).then((user)=>{
    console.log(user)
    res.render('index', { title: 'Express' });
  })
});

module.exports = router;
