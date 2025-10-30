# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Compile TypeScript to JavaScript
RUN npx tsc

# Command to run your bot
CMD ["node", "dist/index.js"]
