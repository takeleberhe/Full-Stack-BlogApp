#os part of the application
FROM node:16

# Create app directory
WORKDIR /usr/src/app 
# Install app dependencies
COPY package*.json ./
RUN npm install

 #copy from current(back-end) in our pc  directrory to worker directory the folder inside docker
COPY . .
EXPOSE 8080
  #run
CMD [ "node", "server.js" ]

