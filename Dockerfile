FROM nginx

RUN apt-get update
RUN apt-get install -y git
RUN git clone -b teaser https://github.com/ibcnit-shikosai/shikosai_30.git /usr/share/teaser
RUN cp /usr/share/teaser/default.conf /etc/nginx/conf.d/default.conf