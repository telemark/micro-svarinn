# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:5b32ea64af31e4d8eb995db587a87a097df3eaba7c6f0940d20fed274207170c

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start
