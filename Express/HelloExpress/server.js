const express = require("express");
const app = express()

//without ejs
app.use(express.static(__dirname + "/static"));

//with ejs to can do the following 

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/',(res,resp) => {
  resp.render("index")
});

app.get('/users',(req,res) =>{
var users_array = [
  {name:"test1" , email:"test1@test.com"},
  {name:"test2" , email:"test2@test.com"},
  {name:"test3" , email:"test3@test.com"},
];
res.render("user" , {users:users_array});
});
app.listen(8000,() => console.log("Listening on hello express port 8000"));
