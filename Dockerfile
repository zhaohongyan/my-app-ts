# syntax=docker/dockerfile:1

# 固定这个node版本，要不然每次拉node环境太久了
FROM node:14.17.3
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "scripts/start.js" ]
