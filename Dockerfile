FROM node:latest

WORKDIR /src

COPY package*.json ./

RUN npm install --silent --production

COPY . .

CMD ["npm", "start"]

EXPOSE 3000
