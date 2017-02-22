FROM nginx

COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html


FROM node:6.9.5-alpine

# Copy application files
COPY ./build /usr/src/app
WORKDIR /usr/src/app

# Install Yarn and Node.js dependencies
RUN npm install yarn --global --no-progress --silent --depth 0 && \
    yarn install --production --no-progress

CMD [ "node", "server.js" ]