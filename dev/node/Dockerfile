FROM node:lts

ENV NODE_ENV=development

RUN apt update && \
    apt install -y bash curl git

RUN npm install -g @vue/cli

WORKDIR /usr/var/app