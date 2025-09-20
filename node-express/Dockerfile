FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm i
COPY . .
RUN npm run build
ENV PORT=8083
EXPOSE 8083
CMD ["npm","run","start:prod"]
