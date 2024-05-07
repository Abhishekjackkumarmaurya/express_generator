const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mongodb_1')

const userSchema=mongoose.Schema({
username:String,
email:String,
age:Number
})

module.exports=mongoose.model('user',userSchema)