FROM node:latest
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm install
COPY *.js ./
EXPOSE 8080
VOLUME ["/var/log"]
CMD ["npm", "run", "startWithLog"]
