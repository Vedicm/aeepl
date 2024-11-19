const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    biological_treatment : {type : String} , 
    location : {type : String} ,
    type_of_project : {type : String } ,
    capacity : {type : String}
})

const House = mongoose.model("House" , houseSchema);

module.exports = House;




