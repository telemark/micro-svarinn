# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:a3d73944b66740cc4bcaac3c4bd833fa6d05047a93efab887e56652bcc59c69e

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
