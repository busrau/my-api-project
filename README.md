
Book API
This is a Node.js-based API for managing books. It provides endpoints for creating, reading, updating, and deleting books. The API is interacts with a MongoDB database to store book information.

Prerequisites
Before running the application, ensure you have the following installed:

Node.js
npm (Node Package Manager)
Docker (for running MongoDB using Docker Compose)

Installation
Navigate to the project directory:
Install dependencies:
npm install

Usage
Start MongoDB using Docker Compose:

docker-compose up
Tests will be run and API will be available at http://localhost:4000/api/books.
You can find all APIs in rest.http file.

Environment Variables
The following environment variables can be configured:

PORT: Port number for the Node.js server (default is 3000).
MONGODB_URI: MongoDB connection URI (default is mongodb://mongodb:27017).
DB_NAME: Name of the MongoDB database (default is my_db).
Folder Structure
controllers: Contains route controllers for handling HTTP requests.
models: Defines MongoDB schemas for book objects.
services: Contains business logic for book-related operations.
Dockerfile: Dockerfile for building the Node.js application image.
docker-compose.yml: Docker Compose file for running MongoDB and the Node.js application.