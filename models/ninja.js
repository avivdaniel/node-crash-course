const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "p oint"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere" // type of map we want to use
    }
});

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
    },
    geometry: GeoSchema
});

//Pass the name of the collection
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;