const express = require("express");
const bodyParser= require("body-parser");
const app = express()
const listen = 3000
app.use(bodyParser.urlencoded({extended: true}));

app.listen(listen,function(){
	console.log("server is running on port 3000")
})