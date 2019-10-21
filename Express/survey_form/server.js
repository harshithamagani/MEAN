const express = require('express');
const app = express();

app.use(express.static(__dirname+'/static'));
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views", __dirname+"/views");

app.get('/', (req,res) => {
    res.render("index")
});

app.post('/post',(req,res) => {
    console.log(req.body) 
    res.render("display_details",{data:req.body})
});

app.listen(8000,() => console.log("Listening to survey form at 8000"));