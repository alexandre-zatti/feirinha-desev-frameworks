FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

# Installing dependencies
COPY package*.json /usr/src/client/
RUN npm install

# Copying source files
COPY . /usr/src/client

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"