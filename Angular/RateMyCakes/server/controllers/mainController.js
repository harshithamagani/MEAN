const mongoose = require('mongoose');
const Cake = mongoose.model("Cake");
const Review = mongoose.model('Review');

module.exports = {
    findAllCakes: (req,res) => {
        Cake.find().populate('_reviews').exec()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    createNewCake: (req,res) => {
        Cake.create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    },
    getCakeByID: (req,res) => {
        var id = req.params.id;
        Cake.find({_id:id})
            .then(data => {
                res.json(data);
            })
            .catch(err =>{
                res.json(err);
            })
    },

    createCommentForCake : (req,res) =>{
        Cake.findById(req.params.id)
        .then(data => {
            var newReview = new Review(req.body);
            newReview._cake = data
            data._reviews.push(newReview)
            data.save()
            .then(data =>{
                newReview.save()
                .then(data =>{
                    res.json(data);
                })
                .catch(err =>{
                    console.log("Error occured while SAVING Cake",err)
                    res.render(err)
                })
            })
            .catch(err =>{
                console.log("Error occured while posting comments SAVING Review",err)
                res.render(err)
            })
        })
        .catch(err => {
            console.log("Error occured while posting Review",err)
            res.render(err)
        }) 
    }
}