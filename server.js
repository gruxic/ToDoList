const express = require("express");
const bodyParser = require("body-parser");
const app=express();
app.use(express.static("public"));
var items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    var today = new Date();
    var day=today.toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long"});
    res.render("list",{dayToday:day,newListItems:items});
}); 
app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})
app.post("/clear",function(req,res){
    items=[];
    res.redirect("/");
})
app.listen(process.env.PORT||3000, function(){
    console.log("SERVER RUNNING AT 3000");
});
