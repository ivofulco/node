FROM node:14.11.0-alpine3.11
WORKDIR /app
COPY package*.json ./
RUN nom install
COPY . .
EXPOSE 8080
CMD ["node","index.js"]