const express = require("express")
const app =  express()

app.use(express.static(__dirname+"/static"));

app.set('view engine' , "ejs");
app.set('views' , __dirname + "/views");
var all_cats = [
    {name: "cuddles", food: "fish" , age:"4" , sleep:["under the bed","in a sunbeam"]}, 
    {name: "kitty", food: "chicken", age:"2" , sleep:["under the table","in pile of cloths"]}, 
    {name: "putty", food: "cat food", age:"2" , sleep:["under the chair","in pile of cloths"]}, 
];
app.get('/',(req,res) => {
    res.render('index', {cats: all_cats});
})

app.get('/:name',(req,res) => {
    //for(var i=0 ; i<)
    //res.send("Hello "+req.params.name)
    name = req.params.name
    console.log(name)
    var cat = {} 
    console.log(all_cats)
    for(var i=0 ; i< all_cats.length;i++ ){
        if(name == all_cats[i]['name']){
            cat = all_cats[i]
        }
    }

    res.render('cat_details', {cat: cat});
});

app.listen(8000 , () => console.log("Listening Cat Data EJS at 8000"))