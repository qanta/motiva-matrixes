FROM node AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/* ./
