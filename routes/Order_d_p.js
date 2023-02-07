const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.send({data:" order_c_p"});
});
router.post("/", (req, res)=>{
    res.send({data:" order_c_p"});
});

module.exports = router;