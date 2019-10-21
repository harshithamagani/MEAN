const express = require("express");
const app = express()
const axios = require('axios');
const session = require('express-session');

var util = require('util')
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/',(req,res) => {
    res.render('index')
})
//without ejs
app.get('/people', function(req, res){
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    if( req.session.name == null){
        req.session.name = "people"
    }
    req.session.name = "people"
    axios.get('http://swapi.co/api/people')
    .then(response => {
        // log the response.data before moving on! 
        console.log(req.session.name);
        console.log(response.data);
        // rather than rendering, just send back the json response.data!
        res.json(response.data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })
});

app.get('/planet',function (req,res){
    if( req.session.name == null){
        req.session.name = "planets"
    }
    req.session.name = "planets"
    axios.get('http://swapi.co/api/planets')
    .then(response => {
        // log the response.data before moving on! 
        console.log(req.session.name);
        console.log(response.data);
        // rather than rendering, just send back the json response.data!
        res.json(response.data);
    })
    .catch(error => {
        // log the error before moving on!
        console.log(error);
        res.json(error);
    })
});


app.get('/next',function (req,res){
    if(req.session.name == null){
        req.session.name='people'
    }
    if( req.session.count == null || req.session.count <= 0){
        req.session.count = 2  
    }
    else{
        req.session.count += 1
    }
    axios.get('https://swapi.co/api/'+req.session.name+'/?page='+req.session.count)
    .then(response => {
        //console.log(response.data);
        console.log(req.session.count);
        console.log(req.session.name);
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});


app.get('/previous',function (req,res){
    if(req.session.name == null){
        req.session.name='people'
    }
    if( req.session.count == null || req.session.count <= 0){
        req.session.count = 1  
    }
    else{
        req.session.count -= 1
    }
    axios.get('https://swapi.co/api/'+req.session.name+'/?page='+req.session.count)
    .then(response => {
        console.log(req.session.count);
        console.log(req.session.name);
        //console.log(response.data);
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});

app.get('/planets/:j',function (req,res){
    var arr=[]
    axios.get('https://swapi.co/api/planets/?page='+j)
    .then(response => {
        obj = response.data
        arr.push(obj)
        console.log(response.data);
        res.json(obj);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});

app.listen(8000,() => console.log("Listening on hello express port 8000"));