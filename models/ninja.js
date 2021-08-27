const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in geo location
});

//Pass the name of the collection
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;