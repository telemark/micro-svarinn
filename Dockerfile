# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:3cdf11e8c7ebf878381aab31d3bb4da14588f3d415d7b7346477656a3f7ad61d

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
