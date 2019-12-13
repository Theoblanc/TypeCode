FROM node:10.17.0

RUN mkdir backend
WORKDIR /backend

COPY . /backend/

RUN npm install && npm cache clean --force

CMD [ "npm", "run", "dev" ]
