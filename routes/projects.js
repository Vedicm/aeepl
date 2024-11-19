const express = require("express");
const router = express.Router();
const projectController = require("../controller/project.js");

router.get("/" , async (req , res)=>{
    await projectController.projectController(req , res)
})

module.exports = router;



