const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
//

const productManagerSchema = new mongoose.Schema({
    title : {
        type : String,
        required: [true, "Title of the product cannot be empty!!" ],
        minlength: [2, "Title of the product should be more than 2 charecters!"]
    },
    price : {
        type : Number,
        required: [true, "Price of the Product cannot be empty!!" ],
    },
    image_url : {
        type : String,
        required: [true, "Image url of the product cannot be empty!!" ],
    }
},{timestamps:true})

const Product = mongoose.model('Product', productManagerSchema);