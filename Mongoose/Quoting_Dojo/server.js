const express = require("express")
const app = express()
const mongoose = require('mongoose');
    app.use(express.urlencoded({extended: true})); 
    app.use(express.static(__dirname+"/static"))
    app.set('view engine' , "ejs");
    app.set('views',__dirname+"/views");
    
    mongoose.connect('mongodb://localhost/quote_app', {useNewUrlParser: true});
    
    const QuoteSchema = new mongoose.Schema({
        name: String,
        quote: String
       },{timestamps: true})
       // create an object to that contains methods for mongoose to interface with MongoDB
    const Quote = mongoose.model('Quote', QuoteSchema);
    
    app.get('/',(req,res)=>{
        res.render('index')
    })
    app.post('/post/quote',(req,res) =>{
        console.log("Hello , Quote",req.body)
    const quoteData = new Quote(req.body);
    quoteData.save()
    .then(data => {
       console.log('Created new Quote');
       res.redirect('/quotes')
    })
    .catch(err => res.json(err));
    })
    app.get('/quotes' ,(req,res)=> {
    Quote.find()
        .then(all_quotes => {
           res.render('quotes',{quotes:all_quotes})
        })
        .catch(err => res.json(err));
    })

    app.listen(8000,()=>console.log("Listening Cat Data EJS at 8000"))