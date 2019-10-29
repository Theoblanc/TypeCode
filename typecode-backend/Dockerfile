FROM node:10.16.3

WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app

COPY package.json /usr/src/app
RUN npm install && npm cache clean --force

COPY . /usr/src/app
# RUN npm run build

CMD npm run dev
