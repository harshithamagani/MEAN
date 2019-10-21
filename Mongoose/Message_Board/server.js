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
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
mongoose.connect('mongodb://localhost/message_app')

const MessageSchema = new mongoose.Schema({
    name: String,
    message: String,
    _comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
},{timestamps:true})

const CommentSchema = new mongoose.Schema({
    name : String,
    comment : String,
    _message: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }
},{timestamps:true})

let Message = mongoose.model('Message', MessageSchema);
let Comment = mongoose.model('Comment', CommentSchema);

app.get('/',(req,res) => {
    Message.find().populate('_comments').exec()
    .then(data=>{
        res.render('index',{messages:data})
    })
    .catch(err=>{
        console.log("Error Occured while rendering index.ejs",err)
        res.render(err)
    })
})

app.post('/post/message',(req,res) => {
    var msg = new Message(req.body)
    msg.save()
    .then(data=>{
        console.log("Created a new msg",msg)
        res.redirect('/')
    })
})

app.post('/post/comment/:msgID',(req,res) =>{
    Message.findById(req.params.msgID)
    .then(data => {
        var newComment = new Comment(req.body)
        newComment._message = data
        data._comments.push(newComment)
        data.save()
        .then(data =>{
            newComment.save()
            .then(data =>{
                res.redirect('/')
            })
            .catch(err =>{
                console.log("Error occured while posting comments SAVE MSG",err)
                res.render(err)
            })
        })
        .catch(err =>{
            console.log("Error occured while posting comments SAVE COMMENT index.ejs",err)
            res.render(err)
        })
    })
    .catch(err =>{
        console.log("Error occured while posting comments",err)
        res.render(err)
    }) 
})




app.listen(8000, () => console.log("Listening on Mongoose dashboard express port 8000"));