FROM node:latest

WORKDIR /usr/src

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
