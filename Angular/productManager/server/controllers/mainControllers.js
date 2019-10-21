const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    findAll: (req,res) => {
        Product.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    createProduct : (req,res) => {
        Product.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    },
    findProductByID : (req,res) => {
        Product.findById(req.params.id)
        .then( data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    },
    updateProductByID : (req,res) => {
        Product.findOneAndUpdate({_id:req.params.id},req.body,{ runValidators: true })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
    },
    deleteProductByID : (req,res) => {
        Product.findOneAndDelete({_id:req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
    }
}

