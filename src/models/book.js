// models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    country: { type: String, required: true },
    birthDate: { type: Date, required: true }
  },
  price: { type: Number, required: true },
  isbn: { type: String, required: true },
  language: { type: String, required: true },
  numberOfPages: { type: Number, required: true },
  publisher: { type: String, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
