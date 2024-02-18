// __tests__/getAll.test.js
const { getAllBooks } = require('../services/bookService');
const Book = require('../models/book');

jest.mock('../models/book');

describe('Get All Books', () => {
  it('should get all books', async () => {
    const mockBooks = [
      { _id: '1', title: 'Book 1' },
      { _id: '2', title: 'Book 2' }
    ];

    // Mocking the Book.find method
    Book.find.mockResolvedValue(mockBooks);

    const books = await getAllBooks();

    expect(books).toEqual(mockBooks);
  });

  it('should handle errors when fetching books', async () => {
    // Mocking the Book.find method to throw an error
    Book.find.mockRejectedValue(new Error('Mock Error'));

    await expect(getAllBooks()).rejects.toThrow('Could not fetch books');
  });
});
