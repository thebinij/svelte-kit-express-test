# Use a Node.js LTS version as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the SvelteKit .svelte-kit folder to the container
COPY .svelte-kit/ .svelte-kit/

# Expose the port that the Node.js server will listen on (adjust if needed)
EXPOSE 4173

# Command to run the Node.js server
CMD ["node", "./.svelte-kit/output/server/index.js"]
