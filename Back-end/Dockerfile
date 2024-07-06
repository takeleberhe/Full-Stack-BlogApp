#base image
FROM node:16
# Create app directory inside docker container
WORKDIR /usr/src/app 
# Install app dependencies
COPY package*.json ./
RUN npm install
#copy all data from current directory in our machine to the directory inside docker container
COPY . .
#use port 8080 to connect the port of the docker container with the port of the machine running it.
EXPOSE 8080
  #run the code inside the docker container 
CMD [ "nodemon", "server.js" ]

