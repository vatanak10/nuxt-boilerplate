ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS build
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm i

COPY . ./

RUN pnpm run build
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY --from=build /app/.output ./

ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000
CMD ["node", "/app/server/index.mjs"]
