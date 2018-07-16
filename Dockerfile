FROM nginx

EXPOSE 80

COPY ./teaser /usr/share/nginx/30/teaser
RUN cp /usr/share/nginx/30/teaser/teaser.conf /etc/nginx/conf.d/teaser.conf