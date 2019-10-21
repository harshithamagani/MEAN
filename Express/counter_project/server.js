const express = require("express")
const app = express()
const session = require('express-session');

app.use(express.static(__dirname+"/static"))
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    console.log("Value of name in session: ", req.session.name);
    if( req.session.name == null){
        req.session.name = 0  
    }
    else{
    req.session.name +=1
    }
    res.render('index',{counter: req.session.name});
});

app.get('/reset',(req,res)=> {
    req.session.destroy();
    res.redirect('/')
});

app.listen(8000,() => console.log("Listening on hello express port 8000"));