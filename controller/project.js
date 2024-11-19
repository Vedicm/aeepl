const Projects = require("../models/project.js");
const Houses = require("../models/house.js");
const Electroplates = require("../models/electroplating.js");
const Paint = require("../models/paint.js");
const Coolant = require("../models/coolent.js");
const Wastewater = require("../models/wasteWater.js");
const Annual = require("../models/annual.js");

const projectController = async (req , res) => {
    const projectList = await Projects.find({});
    const houseList = await Houses.find({});
    const electroplatesList = await Electroplates.find({});
    const paintList = await Paint.find({});
    const coolentList = await Coolant.find({});
    const wasteWaterList = await Wastewater.find({});
    const annualList = await Annual.find({});
    res.render("infos/project.ejs" , {projectList  , houseList , electroplatesList , paintList , coolentList , wasteWaterList , annualList});
}

module.exports = {projectController};





