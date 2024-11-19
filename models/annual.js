const mongoose = require("mongoose");

const annualSchema = new mongoose.Schema({
    biological_treatment : {type : String} , 
    location : {type : String} ,
    type_of_project : {type : String } ,
    capacity : {type : String}
})

const Annual = mongoose.model("Annual" , annualSchema);

module.exports = Annual;




