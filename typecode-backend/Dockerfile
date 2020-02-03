FROM node:12.14.1

RUN mkdir backend
WORKDIR /backend

COPY . /backend/

RUN npm install && npm cache clean --force

CMD [ "npm", "run", "dev" ]
