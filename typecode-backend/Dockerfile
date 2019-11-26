FROM node:10.15.0

WORKDIR /app

COPY . .

RUN npm install && npm cache clean --force

COPY . .
# RUN npm run build

CMD [ "npm", "run", "dev" ]
