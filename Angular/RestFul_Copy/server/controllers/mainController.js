const mongoose = require('mongoose')
const Task = mongoose.model('Task')
module.exports = {
    findAll: (req, res) => {
        Task.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },
    createTask: (req, res) => {
        Task.create(req.body)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },
    getTaskByID: (req, res) => {
        var id = req.params.id
        Task.find({ _id: id })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },
    updateTaskByID: (req, res) => {
        console.log(req.params.id);
        var id = req.params.id;
        Task.findOneAndUpdate({ _id: id }, req.body)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    deleteTaskByID: (req, res) => {
        var id = req.params.id
        Task.findOneAndDelete({ _id: id })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },
}