const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    biological_treatment : {type : String} , 
    location : {type : String} ,
    type_of_project : {type : String } ,
    capacity : {type : String}
})

const Project = mongoose.model("Project" , projectSchema);

module.exports = Project;



