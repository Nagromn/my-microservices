FROM node:22

WORKDIR /var/www/html

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8082

CMD ["npm", "start"]
