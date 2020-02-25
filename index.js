const express = require("express");
const bodyParser= require("body-parser");
const app = express()
const request = require('request');
const listen = 3000
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
	var symbol = req.body.stock.toUpperCase()
	var url = "http://phisix-api.appspot.com/stocks/"+symbol+".json"
	request(url, function (error, response, body) {
 	//console.error('error:', error); // Print the error if one occurred
  	//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  	var data = JSON.parse(body);
  	var price = data.stock[0].price.amount;
  	console.log(price)
  	res.send("the stock price of "+price)
  	})
});



app.listen(listen,function(){
	console.log("server is running on port 3000")
})