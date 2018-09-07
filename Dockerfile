# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:6466abf7c3b4bfe3fa0c09b6f91d2809307974acce61ab26ba7eed3c1fdb08de

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
