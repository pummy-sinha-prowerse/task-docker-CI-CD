FROM node:17

# Working dir
WORKDIR /app

# Copy files from Build
COPY package*.json ./

# Install Globals
RUN npm install prettier -g

# Install Files
RUN npm install 

# Copy local directories to the current local directory of our docker image (/app)
COPY . .

# Build
RUN npm run build

# Open Port
EXPOSE 1337

# Define the command to run your app
CMD ["npm", "run", "start:prod"]

