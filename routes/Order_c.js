const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.send({data:" order_c"});
});
router.post("/", (req, res)=>{
    res.send({data:" order_c"});
});

module.exports = router;