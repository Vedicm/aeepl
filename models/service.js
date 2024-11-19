const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    heading : {type : String},
    service : {type : String},
    icon : {type : String}
})

const Service = mongoose.model("Service" , serviceSchema);

module.exports = Service;

