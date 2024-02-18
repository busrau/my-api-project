# Use a Node.js base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

EXPOSE 4000

# Command to run the application
CMD ["sh", "-c", "npm test && npm start"]
