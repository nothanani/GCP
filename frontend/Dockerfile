# Step 1: Build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./ #checks which library to install
RUN npm install 
COPY . .
RUN npm run build
#build remote node

# Step 2: Serve the app
FROM node:20-alpine
WORKDIR /app

# Install 'serve' globally
RUN npm install -g serve

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist

# Inform Docker/GCP we intend to use a port
EXPOSE 8080

# Use the shell to expand the $PORT variable provided by Cloud Run
CMD ["sh", "-c", "serve -s dist -l $PORT"]