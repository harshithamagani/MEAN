const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rateMyCake');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file);
     }
  })