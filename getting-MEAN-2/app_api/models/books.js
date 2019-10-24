const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  customer: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date,
    'default': Date.now
  }
});

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  categories: [String],
  published: String,
  
  reviews: [reviewSchema]
});

mongoose.model('Book', bookSchema);