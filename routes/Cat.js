const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.send({data:" cat"});
});
router.post("/", (req, res)=>{
    res.send({data:" cat"});
});
router.delete("/",(req, res)=>{
    res.send({data:" cat"});
});
module.exports = router;