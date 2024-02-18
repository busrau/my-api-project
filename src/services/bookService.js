// services/bookService.js
const Book = require('../models/book');

// Create a new book
async function createBook(bookData) {
  try {
    const book = await Book.create(bookData);
    return book;
  } catch (error) {
    throw new Error('Could not create book');
  }
}

// Get all books
async function getAllBooks() {
  try {
    const books = await Book.find();
    return books;
  } catch (error) {
    throw new Error('Could not fetch books');
  }
}

// Update a book by ID
async function updateBook(id, newData) {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, newData, { new: true });
    if (!updatedBook) {
      throw new Error('Book not found');
    }
    return updatedBook;
  } catch (error) {
    throw new Error('Could not update book');
  }
}

// Delete a book by ID
async function deleteBook(id) {
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      throw new Error('Book not found');
    }
    return deletedBook;
  } catch (error) {
    throw new Error('Could not delete book');
  }
}

module.exports = {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook
};
