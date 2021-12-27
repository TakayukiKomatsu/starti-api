# Builder temporary container
FROM node:16.0-alpine as builder
# Set and create folder /api
WORKDIR /api
# COPY files to /api folder
COPY package.json yarn.lock ./
# "Don’t generate a yarn.lock lockfile and fail if an update is needed."
RUN yarn install --frozen-lockfile
# COPY all files to /api folder
COPY . .
# RUN build script
RUN yarn build

FROM node:16.0-alpine

# Production configuration
ENV NODE_ENV=production

# Disable .env loading
ENV ENV_SILENT=true

# Listen to external network connections
ENV HOST=0.0.0.0
ENV PORT=3333
ENV APP_KEY=

WORKDIR /api

COPY --from=builder /api/build .

RUN yarn install

EXPOSE 3333

CMD [ "node","server.js" ]
