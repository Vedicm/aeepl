const express = require("express");
const router = express.Router();
const plantController = require("../controller/plants.js");

router.get("/" , async (req , res)=>{
    plantController.plantsController(req , res);
});

module.exports = router;


