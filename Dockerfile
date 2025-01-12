FROM oven/bun:1 AS base

COPY ./ /app
WORKDIR /app
run bun i 
run bun run build

RUN bun install serve
CMD [ "serve", "-s", "build", "-l", "3200"]



