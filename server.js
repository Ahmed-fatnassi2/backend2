const express = require("express");
const path = require("path");

const app = express(); //app=>server//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is listening on port " + PORT));
const mysql = require("mysql");

//
const authRoute= require('./routes/Auth')
const catRoute= require('./routes/Cat')
const igRoute= require('./routes/Ig')
const order_d_pRoute= require('./routes/Order_d_p')
const order_cRoute= require('./routes/Order_c')
const order_dRoute= require('./routes/Order_d')
const prd_igRoute= require('./routes/Prd_ig')
const prodRoute= require('./routes/Prod')
//
app.use("/auth",    authRoute);
app.use("/cat",    catRoute);
app.use("/ig",    igRoute);
app.use("/order_d_p",    order_d_pRoute);
app.use("/order_c",    order_cRoute);
app.use("/order_d",    order_dRoute);
app.use("/prd_ig",    prd_igRoute);
app.use("/prod",    prodRoute);

//


//Create Connections

const connectDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projet_stage",
});
connectDB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connection done");
});

// path , config, nodemoon
