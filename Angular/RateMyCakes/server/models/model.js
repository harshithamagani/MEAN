const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
//Some schema

const cakeSchema = new mongoose.Schema({
    baker_name: {
        type:String,
        required: [true, "Name of the baker connot be empty!!" ],
        minlength: [2 , "The name of baker should be more then 2 Charecters!!"]
    },
    image_url : { type: String,
    required: [true,"Image url for the cake cannot be empty!!"]},
    desc : {
        type : String,
        required: [true, "Cake description is required Field!!" ],
        minlength: [4 , "Cake description length of Description more then 4 Charecters!!"]
    },
    _reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
},{timestamps:true})

const reviewSchema = new mongoose.Schema({
    _cake: { type: Schema.Types.ObjectId, ref: 'Cake' },
    stars : Number,
    Comment : String,
  });

  const Cake = mongoose.model('Cake', cakeSchema);
  const Review = mongoose.model('Review', reviewSchema);