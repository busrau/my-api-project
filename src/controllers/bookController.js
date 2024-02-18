// controllers/bookController.js
const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, updateBook, deleteBook } = require('../services/bookService');

// Create a new book
router.post('/books', async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all books
router.get('/books', async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a book
router.put('/books/:id', async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedBook = await updateBook(bookId, req.body);
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a book
router.delete('/books/:id', async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await deleteBook(bookId);
    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
