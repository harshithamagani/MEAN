const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    completed : { type: Boolean, default: false },
    desc : String
},{timestamps:true})

const Task = mongoose.model('Task',TaskSchema)