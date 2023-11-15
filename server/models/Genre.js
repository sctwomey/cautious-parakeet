const mongoose = require('mongoose');

const { Schema } = mongoose;

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Genre = mongoose.model('Category', genreSchema);

module.exports = Genre;
