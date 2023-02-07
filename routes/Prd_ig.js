const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.send({data:" prd_ig"});
});
router.post("/", (req, res)=>{
    res.send({data:" prd_ig"});
});

module.exports = router;