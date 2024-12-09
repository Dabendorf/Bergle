FROM node:16.11.1-slim AS build

COPY ./ /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
