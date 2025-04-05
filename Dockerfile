# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application code into the container
COPY . .

# Compile TypeScript to JavaScript
RUN tsc

# Expose any required ports (optional, depending on your bot's needs)
EXPOSE 3000

# Command to run your bot
CMD ["node", "dist/index.js"]
