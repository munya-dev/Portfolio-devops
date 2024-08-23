
FROM node:18.18.2

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm install 

COPY . .

EXPOSE 3100

CMD [ "npm", "run", "dev" ]