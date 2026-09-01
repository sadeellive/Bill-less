# Stage 1: Build static React assets
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve static files with Nginx
FROM nginx:alpine

# Copy static assets from build stage to Nginx directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default Nginx configuration to listen on port 8080 (Cloud Run default)
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
