FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency specifications
COPY package*.json ./

# Install dependencies cleanly without requiring package-lock.json
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app

# Install 'serve' globally to run static distribution
RUN npm install -g serve

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
