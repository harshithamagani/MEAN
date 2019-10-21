const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public/dist/public'));

require("./server/config/mongoose.js")
require("./server/config/routes.js")(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000,() => console.log("Listing To Product Manager Project Port 8000"));