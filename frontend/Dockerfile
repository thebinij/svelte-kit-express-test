# Use a Node.js LTS version as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the SvelteKit app
RUN npm run build

# Expose the port that the SvelteKit app will listen on (adjust if needed)
EXPOSE 4173

# Command to run the SvelteKit app
CMD ["npm", "run", "preview"]
