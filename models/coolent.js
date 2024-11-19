const mongoose = require("mongoose");

const coolentSchema = new mongoose.Schema({
    biological_treatment : {type : String} , 
    location : {type : String} ,
    type_of_project : {type : String } ,
    capacity : {type : String}
})

const Coolent = mongoose.model("Coolent" , coolentSchema);

module.exports = Coolent;




