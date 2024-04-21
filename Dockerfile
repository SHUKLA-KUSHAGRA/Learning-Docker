FROM node:21-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g typescript
RUN npm run build

EXPOSE 3000

CMD [ "node" , "dist/index.js" ]