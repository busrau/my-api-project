const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookController = require('./src/controllers/bookController');

setTimeout(() => {
  mongoose.connect('mongodb://mongodb:27017')
      .then(() => {
          console.log('Connected to MongoDB');
      })
      .catch((error) => {
          console.error('Error connecting to MongoDB:', error);
          process.exit(1); // Exit the application if unable to connect
      });
}, 5000); // 5-second delay (adjust as needed)


app.use(express.json()); // Middleware to parse JSON bodies

// Mount the book controller at /api
app.use('/api', bookController);
const port = process.env.PORT || 3000; // Use PORT environment variable if set, otherwise default to 3000

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

