FROM node:20-alpine AS build

# install simple http server for serving static content
RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]