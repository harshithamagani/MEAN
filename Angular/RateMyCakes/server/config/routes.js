const mainController = require('../controllers/mainController')
module.exports = (app) => {

app.get('/cakes',(req,res) => {
    return mainController.findAllCakes(req, res);
})

app.post('/cakes',(req,res) => {
    return mainController.createNewCake(req, res);
})

app.get('/cakes/:id',(req,res) => {
    return mainController.getCakeByID(req, res);
})

app.post('/comments/:id',(req,res) => {
    return mainController.createCommentForCake(req, res);
})
}