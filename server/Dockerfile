FROM node:16.13.0-alpine AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN yarn run build

FROM node:16.13.0-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3001
CMD ["yarn", "run", "start:prod"]
