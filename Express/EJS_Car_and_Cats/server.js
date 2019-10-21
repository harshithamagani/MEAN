const express = require("express");
const app = express();

app.use(express.static(__dirname+"/static"));

app.set("view engine","ejs")
app.set("views",__dirname+"/views");

app.get('/' ,(req,res) => {
    res.render("index")
});
app.get('/cars' ,(req,res) => {
    res.render("cars")
});
app.get('/cats' ,(req,res) => {
    res.render("cats")
});
app.get('/cars/new' ,(req,res) => {
    res.render("form")
});
app.listen(8000, () => console.log("Listen on ejs cats abd cars"));