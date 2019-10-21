const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(PORT, () => console.log("Listening on Pokenmon API project port",PORT));