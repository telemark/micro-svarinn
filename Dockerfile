# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:9d8956199dee1864786cb10b73d79709b75413d5e2494a6e1b0199f81cb944ec

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
