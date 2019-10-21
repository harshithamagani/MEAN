const express = require("express")
const app = express()
const session = require('express-session')
const flash = require('express-flash');
const mongoose = require('mongoose');

app.use(flash());
app.use(express.static(__dirname + "/static"))
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000 }
}))
mongoose.connect('mongodb://localhost/mongoose')

const MongooseSchema = new mongoose.Schema({
    name: String,
    age: String,
    desc: String
   },{timestamps: true})
   
   
const Mongoose = mongoose.model('Quote', MongooseSchema);


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    Mongoose.find()
    .then(data => {
        res.render("index",{mongooses:data})
    })
    .catch(err =>{
        console.log("Error occured",err)
            res.render(err)
    })
})

app.get('/mongooses/new', (req, res) => {
    res.render('add_form')
})

app.post('/post/new', (req, res) => {
    var mongdata = new Mongoose(req.body)
    mongdata.save()
        .then(data =>{
            console.log("created new mongoose",mongdata)
            res.redirect('/')
        })
        .catch(err =>{
            console.log("Error occured",err)
            res.render(err)
        })
})

app.get('/mongooses/:id',(req,res) => {
    var id = req.params.id
    Mongoose.findOne({_id: id})
    .then(data=> {
        res.render("display_info",{mongoose:data}) 
    })
    .catch(err => res.json(err));
})

app.get('/mongooses/edit/:id',(req,res) => {
    var id = req.params.id
    Mongoose.findOne({_id: id})
    .then(data=> {
        res.render("edit_form",{mongoose:data}) 
    })
    .catch(err => res.json(err));
})

app.post('/mongooses/:id' ,(req,res) => {
    var id = req.params.id
    Mongoose.update({_id: id},req.body)
    .then(data => {
        res.redirect("/")
    })
    .catch(err => res.json(err)); 
})

app.get('/mongooses/destroy/:id',(req,res) => {
    var id = req.params.id
    Mongoose.findByIdAndRemove({_id:id})
    .then(data =>{
        console.log("removed",data);
        res.redirect("/")
    })
    .catch(err =>{
        console.log("Error smg:",err)
    })
})


app.listen(8000, () => console.log("Listening on Mongoose dashboard express port 8000"));