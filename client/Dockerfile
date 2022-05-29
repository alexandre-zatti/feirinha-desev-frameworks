FROM node:alpine

WORKDIR /usr/src/client

COPY package*.json /usr/src/client

RUN npm install

COPY ./ /usr/src/client

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]