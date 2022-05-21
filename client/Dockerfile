FROM node:13-alpine

WORKDIR /usr/src/client

ENV PATH /usr/src/client/node_modules/.bin:$PATH

COPY package.json /usr/src/client/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

CMD ["npm", "start"]