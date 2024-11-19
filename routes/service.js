const express = require("express");
const router = express.Router();
const serviceController = require("../controller/service.js");

router.get("/" , async (req , res) => {
    serviceController.serviceController(req , res);
})

module.exports = router;


