# Use the official Node.js 14 Alpine base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port on which your Express.js app listens
EXPOSE 3000

# Start the Express.js application using index.mjs as entry point
CMD ["node", "index.mjs"]
