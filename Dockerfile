# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:ceaf0d08e6b83dee1b4377cbb89fcd8d1b4af3989c2b5d07fda32e2c16d101dc

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
