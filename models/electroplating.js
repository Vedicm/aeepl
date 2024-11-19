const mongoose = require("mongoose");

const electroplatingSchema = new mongoose.Schema({
    biological_treatment : {type : String} , 
    location : {type : String} ,
    type_of_project : {type : String } ,
    capacity : {type : String}
})

const Electroplating = mongoose.model("Electroplating" , electroplatingSchema);

module.exports = Electroplating;




