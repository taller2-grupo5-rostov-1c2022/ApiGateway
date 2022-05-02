FROM node:17

WORKDIR /server

COPY package*.json ./

RUN echo ${GOOGLE_CREDENTIALS} > /server/google-creds.json

RUN npm i

COPY . .

CMD ["npm", "start"]