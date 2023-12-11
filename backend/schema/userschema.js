const mongoose = require('mongoose')

const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})


const userschema = mongoose.model('registration',user)

module.exports= userschema