const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, "Title Field Is Required Field!!" ],
        minlength: [2 , "The Length of Title more then 2 Charecters!!"]
    },
    completed : { type: Boolean, default: false },
    desc : {
        type : String,
        required: [true, "Title Field Is Required Field!!" ],
        minlength: [4 , "The Length of Description more then 4 Charecters!!"]
    }
},{timestamps:true})

const Task = mongoose.model('Task',TaskSchema)