const express = require("express")
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/people_app')

const PersonSchema = new mongoose.Schema({
    name: String,
},{timestamps:true})

const Person = mongoose.model('Person' , PersonSchema)

app.get('/new/:name/',(req,res) =>{
    var name = req.params.name
    Person.create({name:name})
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.get('/',(req,res) => {
    Person.find()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.get('/:name',(req,res) => {
    Person.find({name:req.params.name})
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.get('/remove/:name',(req,res) => {
    Person.findOneAndRemove({name:req.params.name})
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})


app.listen(8000, () => console.log("Listening on 1955 API project port 8000"));