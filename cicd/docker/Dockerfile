FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

# Installing dependencies
COPY ./package.json ./
RUN npm install

# Copying all the files in our project
COPY . .

# Declaring env
ENV NODE_ENV production

# build artifact
RUN npm run build:prd

# Running `npm ci` removes the existing node_modules directory and passing in --only=production ensures that only the production dependencies are installed. This ensures that the node_modules directory is as optimized as possible
RUN npm ci --omit=dev && npm cache clean --force



FROM nginx:stable-alpine

ENV NODE_ENV production

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY ./cicd/docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]