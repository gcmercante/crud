FROM mhart/alpine-node:14

RUN npm install -g yarn nodemon

COPY . /frontend
WORKDIR /frontend/

COPY package.json /frontend/

RUN yarn

RUN npm rebuild node-sass

EXPOSE 80

CMD ["yarn", "start"]