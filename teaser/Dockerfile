FROM nginx

RUN apt-get update
RUN apt-get install -y git
RUN git clone https://github.com/ibcnit-shikosai/shikosai_30.git /usr/share/nginx/shikosai_30
RUN cp /usr/share/nginx/shikosai_30/teaser/teaser.conf /etc/nginx/shikosai_30/teaser/teaser.conf