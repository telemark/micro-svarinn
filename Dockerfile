# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:c8bbcfdbd860de4f40378cf8b37e3b80afdb23ce0d3f626ece4f5897154dc1bf

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
