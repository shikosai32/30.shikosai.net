FROM nginx

RUN apt-get update
RUN apt-get install -y git
RUN git clone -b teaser https://github.com/ibcnit-shikosai/shikosai_30.git /usr/share/nginx
RUN cp /usr/share/nginx/default.conf /etc/nginx/conf.d/default.conf