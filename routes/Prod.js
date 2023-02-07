const express = require("express")
const router = express.Router()
const ProdControler = require("../api/ProdControler")


router.get("/test", ProdControler.test);
router.post("/", (req, res) => {
    res.send({ data: " prod" });
});
router.delete("/", (req, res) => {
    res.send({ data: " prod" });
});

module.exports = router;

// http://localhost:5000/prod/test
