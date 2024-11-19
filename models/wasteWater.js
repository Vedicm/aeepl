const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema({
    biological_treatment : {type : String} , 
    location : {type : String} ,
    type_of_project : {type : String } ,
    capacity : {type : String}
})

const WasteWater = mongoose.model("WasteWater" , waterSchema);

module.exports = WasteWater;




