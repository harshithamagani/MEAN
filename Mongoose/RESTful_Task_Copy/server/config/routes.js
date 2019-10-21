const mainController = require('../controllers/mainController')
module.exports = (app) => {

app.get('/tasks',(req,res) => {
    return mainController.findAll(req, res);
})

app.post('/tasks',(req,res) => {
    return mainController.createTask(req,res);
})

app.get('/tasks/:id',(req,res) => {
    return mainController.getTaskByID(req,res);
})

app.put('/tasks/:id',(req,res) => {
    return mainController.updateTaskByID(req.res);
})

app.delete('/tasks/:id',(req,res) => {
    return mainController.deleteTaskByID(req.res);
})
}