const express = require('express');
const app = express();
require('dotenv').config();
const mongoDB = require('./config/db')

const Port = process.env.PORT || 5000

mongoDB()
app.get("/checkserver",(req,res)=>{
    res.send("server start")
})

app.listen(Port, "localhost", ()=>{
    console.log(`server start : http://localhost:${Port}`)
})