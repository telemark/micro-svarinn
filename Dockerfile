# Setting the base to nodejs 10
FROM mhart/alpine-node:10@sha256:659e1ed37a6cbf72d502439047557cc2fa5b2c118c4ab888aa6b92e58d8b1ca3

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
