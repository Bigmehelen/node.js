# Use a lightweight Node image
FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# App runs on port 3000 (adjust if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
