const mockBooks = [
  {
    _id: '1',
    title: 'Mock Book 1',
    author: {
      name: 'Mock Author 1',
      country: 'Mock Country 1',
      birthDate: new Date('1990-01-01')
    },
    price: 10,
    isbn: '1234567890',
    language: 'English',
    numberOfPages: 200,
    publisher: 'Mock Publisher 1'
  }
];

module.exports = {
  mockBooks
};