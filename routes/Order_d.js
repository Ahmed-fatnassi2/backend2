const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.send({data:" order_d"});
});
router.post("/", (req, res)=>{
    res.send({data:" order_d"});
});

module.exports = router;