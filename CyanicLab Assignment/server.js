require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
require("./database/database").connect();
const bodyParser = require("body-parser");
const cors =require('cors')
// const busboy = require('connect-busboy')
const cookieparser = require("cookie-parser")

const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(cookieparser());

// app.use(busboy())
const router = require("./routes/router");

app.use("/", router);
// Cors
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers" ,"Origin ,X-requested-With , Content , Accept , Content-type,Authorization")
  res.setHeader("Access-Control-Allow-Methods","GET , POST,PUT,DELETE,PATCH,OPTIONS");
  next()

})

app.listen(7000, () => {
   console.log(`Server running on ${7000}...!`);
});
