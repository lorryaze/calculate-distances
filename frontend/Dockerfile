FROM node:18-alpine as builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

RUN npm install -g serve

# Ports to heroku
ENV PORT=3000
EXPOSE $PORT

CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:$PORT"]