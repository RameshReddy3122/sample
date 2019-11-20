
const express=require("express");
const app=express();
const bodyParser=require("body-parser");



app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(req,res){
    return res.redirect('/index1');
});

app.get('/', function(req,res){
    return res.redirect('/index1');
});

app.get('/', function(req,res){
    return res.redirect('/index1');
});

app.get('/index1', function(req,res){
    return res.render('index1');
});


app.get('/submit-index1', function(req,res){
    console.log(req.query);
    return res.send(req.query);
});

app.listen(3000,function(){
    console.log("My server is running, port No.3000")
});
