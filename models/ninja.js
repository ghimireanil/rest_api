const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point',
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
  },
});

//create ninja schems
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  //add geolocation data
  geometry: GeoSchema,
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
