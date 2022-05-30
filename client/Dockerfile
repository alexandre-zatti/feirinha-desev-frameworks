FROM node:alpine

WORKDIR /usr/src/client

COPY package*.json /usr/src/client

RUN npm install

RUN chown -R node.node /usr/src/

COPY ./ /usr/src/client

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]
