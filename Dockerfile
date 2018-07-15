FROM nginx

RUN apt update
RUN apt install git
RUN git clone -b teaser /home/dene/dev/shikosai/shikosai_30/.git /usr/share/nginx