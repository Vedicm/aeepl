const Plants = require("../models/plants.js");

const plantsController = async (req , res) => {
    const plantsList = await Plants.find({})
    res.render("infos/plants.ejs" , {plantsList});
}

module.exports = {plantsController};

