const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://vikash:vikash@mernlearning.alvysh4.mongodb.net/crud').then(()=>{
    console.log("DB Connection Successful")
}).catch((err)=>{
    console.log(err)
})