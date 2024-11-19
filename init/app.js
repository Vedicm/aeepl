const mongoose = require("mongoose");
const initData = require("./data.js");
const Mongo_URL = "mongodb://127.0.0.1:27017/aeepl";
const Plants = require("../models/plants.js");
const projectData = require("./projectData.js");
const Project = require("../models/project.js");
const houseData = require("./house.js");
const House = require("../models/house.js");
const electroplatingData = require("./electroplating.js");
const Electroplating = require("../models/electroplating.js");
const paintData = require("./paintShop.js");
const Paint = require("../models/paint.js");
const coolentData = require("./coolent.js");
const Coolent = require("../models/coolent.js");
const waterData = require("./wasteWater.js");
const WasteWater = require("../models/wasteWater.js");
const annualData = require("./annualMaintainence.js");
const Annual = require("../models/annual.js");
const Service = require("../models/service.js");
const serviceData = require("./Service.js");

main()
.then(res=>console.log("Connection Successful"))
.catch(err=>console.log(err))

async function main(){
   await mongoose.connect(Mongo_URL);
}

// const initDB = async () => {
//     // await Plants.deleteMany({});
//     // console.log("All Plants are deleted")
//     await Plants.insertMany(initData);
//     console.log("Data Successfully inserted");
// }

// initDB();

// const initProject = async () => {
//     // await Project.deleteMany({});
//     // console.log("All Projects are deleted");
//     await Project.insertMany(projectData);
//     console.log("Data Successfully inserted");
// }

// initProject();

// const initHouse = async () => {
//     // await House.deleteMany({});
//     // console.log("All Houses are deleted");
//     await House.insertMany(houseData);
//     console.log("Data Successfully inserted");
// }

// initHouse();

// const initElectroplating = async () => {
//     // await Electroplating.deleteMany({});
//     // console.log("All Electoplates are deleted");
//     await Electroplating.insertMany(electroplatingData);
//     console.log("Data Successfully inserted");
// }

// initElectroplating();

// const initPaint = async () => {
//     // await Paint.deleteMany({});
//     // console.log("All Paints are deleted");
//     await Paint.insertMany(paintData);
//     console.log("Data Successfully inserted");
// }

// initPaint();

// const initCoolent = async () => {
//     await Coolent.deleteMany({});
//     console.log("All Coolents are deleted");
//     await Coolent.insertMany(coolentData);
//     console.log("Data Successfully inserted");
// }

// initCoolent();

// const initWasteWater = async () => {
//     // await WasteWater.deleteMany({});
//     // console.log("All Waters are deleted");
//     await WasteWater.insertMany(waterData);
//     console.log("Data Successfully inserted");
// }

// initWasteWater();

// const initAnnualData = async () => {
//     // await Annual.deleteMany({});
//     // console.log("All Annuals are deleted");
//     await Annual.insertMany(annualData);
//     console.log("Data Successfully inserted");
// }

// initAnnualData();

// const initServices = async () => {
//     // await Service.deleteMany({});
//     // console.log("All Service are deleted")
//     await Service.insertMany(serviceData);
//     console.log("Services are inserted");
// }

// initServices();



