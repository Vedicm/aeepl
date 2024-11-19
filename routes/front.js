const express = require("express");
const router = express.Router();
const frontController = require("../controller/front.js");

router.get("/" , async (req , res)=>{
    frontController.frontController(req , res);
})

module.exports = router;


