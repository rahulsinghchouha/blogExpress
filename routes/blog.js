const express = require("express");
const router = express.Router();

//Import Controller
const {dummyLink} = require("../controllers/likeController");


//create Mapping
router.get("/dummyroute",dummyLink);



//exports
module.exports=router;