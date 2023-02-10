FROM node:16

WORKDIR /Docker/app

COPY ./ /Docker/app

RUN npm install

EXPOSE 8080

CMD [ "node", "index.js"]
