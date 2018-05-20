FROM node:9
RUN apt-get update && apt-get install apt-transport-https -y \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update && apt-get install yarn -y
WORKDIR /home/node
CMD ["yarn"]
