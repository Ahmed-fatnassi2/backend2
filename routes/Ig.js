const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.send({data:" ig"});
});
router.post("/", (req, res)=>{
    res.send({data:" ig"});
});
router.delete("/",(req, res)=>{
    res.send({data:" ig"});
});

module.exports = router;