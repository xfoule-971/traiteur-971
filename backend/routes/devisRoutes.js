const express = require("express");
const router = express.Router();

const {createDevis}=require("../controllers/devisController");

router.post("/",createDevis);

module.exports=router;