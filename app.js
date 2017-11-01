var express=require('express');
var fs=require('fs');
var bodyParser=require('body-parser')
var app=express()
//set ejs	//设置模板引擎为ejs 
app.set('view engine','ejs')
//设置表态资料路径
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
app.get('/create4',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render(`index.ejs`)
})
app.get('/create5',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render(`07.ejs`)
})
app.post('/create',bodyParser.urlencoded({extended:false}),function(req,res){
	var data = fs.readFileSync('message.txt','utf-8')
	data = JSON.parse(data)
	data.push({message:req.body.message,name:req.body.name,texts:req.body.texts})
	fs.writeFileSync('message.txt',JSON.stringify(data));
	
	//render data to ejs file
	res.render('info.ejs',{data:data})    //响应模板引擎
})






app.listen(8080)