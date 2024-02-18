// __tests__/delete.test.js
const { deleteBook } = require('../services/bookService');
const Book = require('../models/book');

jest.mock('../models/book');

describe('Delete Book', () => {
  it('should delete a book', async () => {
    const bookId = '1';

    const mockDeletedBook = {
      _id: bookId,
      title: 'Deleted Book Title'
    };

    // Mocking the Book.findByIdAndDelete method
    Book.findByIdAndDelete.mockResolvedValue(mockDeletedBook);

    const deletedBook = await deleteBook(bookId);

    expect(deletedBook).toEqual(mockDeletedBook);
  });

  it('should handle errors when deleting a book', async () => {
    const bookId = '1';

    // Mocking the Book.findByIdAndDelete method to throw an error
    Book.findByIdAndDelete.mockRejectedValue(new Error('Mock Error'));

    await expect(deleteBook(bookId)).rejects.toThrow('Could not delete book');
  });
});
