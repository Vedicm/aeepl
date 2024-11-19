const mongoose = require("mongoose");

const plantsSchema = new mongoose.Schema({
    heading : {type : String , required : true} ,
    image : {type : String} ,
    description : {type : String , required : true} ,
})

module.exports = mongoose.model("Plants" , plantsSchema);