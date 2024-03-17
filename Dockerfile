FROM node:latest
WORKDIR /GPT4ENEM
COPY . .
RUN npm install --silence --production
CMD ["npm", "start-dev"]
EXPOSE 3000