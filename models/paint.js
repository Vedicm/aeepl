const mongoose = require("mongoose");

const paintSchema = new mongoose.Schema({
    biological_treatment : {type : String} , 
    location : {type : String} ,
    type_of_project : {type : String } ,
    capacity : {type : String}
})

const Paint = mongoose.model("Paint" , paintSchema);

module.exports = Paint;




