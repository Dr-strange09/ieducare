const mongoose =require('mongoose')
const Contact=mongoose.Schema({
    email:String,
    password:String,
    query:String
})

module.exports=mongoose.model("queries",Contact)