# Use the official Node.js 18-alpine base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the Express app will listen on
EXPOSE 4001

# Command to run the application
CMD ["npm", "run", "dev"]