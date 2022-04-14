FROM node:17

WORKDIR /server

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "start"]