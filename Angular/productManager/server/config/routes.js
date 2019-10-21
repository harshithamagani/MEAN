const mainController = require('../controllers/mainControllers');

module.exports = (app) => {

    app.get('/products',(req,res) => {
        return mainController.findAll(req, res);
    })

    app.post('/products',(req,res) => {
        return mainController.createProduct(req, res);
    })

    app.get('/products/:id',(req,res) => {
        return mainController.findProductByID(req, res);
    })

    app.put('/products/:id',(req,res) => {
        return mainController.updateProductByID(req, res);
    })

    app.delete('/products/:id',(req,res) => {
        return mainController.deleteProductByID(req, res);
    })

}