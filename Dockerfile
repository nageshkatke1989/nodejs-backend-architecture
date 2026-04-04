FROM node:20-alpine

# Using alpine version makes the image ~3x smaller
WORKDIR /app

# Install dependencies first (cached layer)
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start in dev mode (assuming nodemon or similar is in package.json)
CMD ["npm", "run", "dev"]
