var express=require('express');
var fs=require('fs');
var bodyParser=require('body-parser')
var app=express()
//set ejs	//设置模板引擎为ejs 
app.set('view engine','ejs')
app.use('/han',express.static('src'));

app.get('/create',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render(`02.ejs`)
})
app.get('/create1',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render(`03.ejs`)
})
app.get('/create2',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render(`04.ejs`)
})
app.get('/create3',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render(`05.ejs`)
})




app.listen(8080)