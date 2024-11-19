const Service = require("../models/service.js");

const serviceController = async (req , res) => {
    const serviceList = await Service.find({});
    res.render("infos/service.ejs" , {serviceList});
}

module.exports = {serviceController}; 

