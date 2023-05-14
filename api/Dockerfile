# syntax=docker/dockerfile:1
# Use an official node image as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container
COPY . .

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm install

# Run the build command which creates the production bundle
RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Running `npm ci` removes the existing node_modules directory.
# Passing in --only=production ensures that only the production dependencies are installed.
# This ensures that the node_modules directory is as optimized as possible.
RUN npm ci --only=production && npm cache clean --force

# Use the node user from the image (instead of the root user)
USER node

# Start the server using the production build
CMD [ "node", "dist/main.js" ]