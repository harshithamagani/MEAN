const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public/dist/public'));

require("./server/config/mongoose.js")
require("./server/config/routes.js")(app)

app.listen(8000,() => console.log("Listing To RestFul Tasks CRUD Project port 8000"));


