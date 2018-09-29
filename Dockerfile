FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
# we deliver tests and its dependencies
RUN  npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]
