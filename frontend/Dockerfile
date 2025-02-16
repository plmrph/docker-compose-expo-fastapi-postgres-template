FROM node:lts-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Ensure npm binaries are in PATH
ENV PATH="/app/node_modules/.bin:$PATH"

# Start Expo in LAN mode to avoid tunnel issues
CMD ["npx", "expo", "start", "--lan"]
