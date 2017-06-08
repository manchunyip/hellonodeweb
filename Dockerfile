FROM node:boron

# copy source code
COPY server.js /var/www/api/

# install express
RUN npm install express

RUN npm install mongodb

# install app dependencies
RUN cd /var/www/api; npm install

# use port 4002
EXPOSE 4002
CMD ["node", "/var/www/api/server.js"]

