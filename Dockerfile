# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:fc5dfe8af093948a8f48b018db5addae767c383c8d3430bcd131e371406bfde5

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
