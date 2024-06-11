FROM node:lts-alpine as build

  WORKDIR /app

  COPY package.json .
  RUN npm install

  COPY . .
  RUN npm run build

FROM alpine:latest

  WORKDIR /app

  COPY --from=build /app/build build
