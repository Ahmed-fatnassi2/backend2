const express = require("express");
const router = express.Router()
const mysql = require("mysql")
// const con = require("../server");
var con = mysql.createConnection("../server")


router.get('/', function(req,res,next) {
    var query="select * from product ";
    con.query(query, function(err, result){
        if(err){
            console.log(err);
            res.send("unable to get the products")
        }
        else{
            req.send(result);
        }
    })
})
module.exports = router;

// const express = require("express");
// const router = express.Router()

// router.get("/", (req, res)=>{
//     res.send({data:" auth"});
// });
// // router.post("/", (req, res)=>{
// //     res.send({data:" auth"});
// // });

// // app.delete("/",(req, res)=>{
// //     res.send({data:" auth"});
// // });

// module.exports = router;