// __tests__/update.test.js
const { updateBook } = require('../services/bookService');
const Book = require('../models/book');

jest.mock('../models/book');

describe('Update Book', () => {
  it('should update a book', async () => {
    const bookId = '1';
    const updatedBookData = {
      title: 'Updated Book Title'
    };

    const mockUpdatedBook = {
      _id: bookId,
      ...updatedBookData
    };

    // Mocking the Book.findByIdAndUpdate method
    Book.findByIdAndUpdate.mockResolvedValue(mockUpdatedBook);

    const updatedBook = await updateBook(bookId, updatedBookData);

    expect(updatedBook).toEqual(mockUpdatedBook);
  });

  it('should handle errors when updating a book', async () => {
    const bookId = '1';
    const updatedBookData = {
      title: 'Updated Book Title'
    };

    // Mocking the Book.findByIdAndUpdate method to throw an error
    Book.findByIdAndUpdate.mockRejectedValue(new Error('Mock Error'));

    await expect(updateBook(bookId, updatedBookData)).rejects.toThrow('Could not update book');
  });
});
