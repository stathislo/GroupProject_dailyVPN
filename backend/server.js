const express = require("express");
const app = express();
const PORT = 5000;
const db = require("./lib/db")
const bodyParser = require("body-parser")
const session = require("express-session")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Backend Server is listening on port ${PORT}`)
    }
})