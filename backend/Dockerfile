FROM mhart/alpine-node:14

RUN npm install -g yarn nodemon typescript

COPY . /backend
WORKDIR /backend/

COPY package.json /backend/

RUN yarn

EXPOSE 80

CMD ["yarn", "start"]