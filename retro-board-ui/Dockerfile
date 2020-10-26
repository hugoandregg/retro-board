FROM node:12.6-buster-slim AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY conf/nginx.conf /etc/nginx/
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/build .
