const express = require("express")
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/task_api')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const TaskSchema = new mongoose.Schema({
    title: String,
    completed : { type: Boolean, default: false },
    desc : String
},{timestamps:true})

const Task = mongoose.model('Task',TaskSchema)

app.get('/tasks',(req,res) => {
    Task.find()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.post('/tasks',(req,res) => {
    Task.create(req.body)
    .then(data => {
        console.log("created new task",data)
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.get('/tasks/:id',(req,res) => {
    var id = req.params.id
    Task.find({_id:id})
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.put('/tasks/:id',(req,res) => {
    var id = req.params.id
    Task.findOneAndUpdate({_id:id},req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.delete('/tasks/:id',(req,res) => {
    var id = req.params.id
    Task.findOneAndDelete({_id:id})
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.listen(8000, () => console.log("Listening on RESTful route task API project port 8000"));