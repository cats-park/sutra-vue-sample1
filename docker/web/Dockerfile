FROM node:14-alpine3.14

WORKDIR /app

RUN apk update && \
    npm install && \
    npm install -g npm && \
    npm install -g @vue/cli


RUN apk add --no-cache python3 py3-pip && \
    apk add --update python3 make g++ && \
    rm -rf /var/cache/apk/*