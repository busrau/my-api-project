const { createBook } = require('../services/bookService');
const Book = require('../models/book');

jest.mock('../models/book');

describe('Create Book', () => {
  it('should create a new book', async () => {
    const mockBookData = {
      title: 'Test Book',
      author: {
        name: 'Test Author',
        country: 'Test Country',
        birthDate: new Date('1990-01-01')
      },
      price: 20,
      isbn: '1234567890',
      language: 'English',
      numberOfPages: 200,
      publisher: 'Test Publisher'
    };

    const mockCreatedBook = {
      _id: 'mockId',
      ...mockBookData
    };

    // Mocking the Book.create method
    Book.create.mockResolvedValue(mockCreatedBook);

    const createdBook = await createBook(mockBookData);

    expect(createdBook).toEqual(mockCreatedBook);
  });

  it('should handle errors when creating a book', async () => {
    const mockBookData = {
      title: 'Test Book',
      // Incomplete data to simulate validation error
    };

    // Mocking the Book.create method to throw an error
    Book.create.mockRejectedValue(new Error('Mock Error'));

    await expect(createBook(mockBookData)).rejects.toThrow('Could not create book');
  });
});