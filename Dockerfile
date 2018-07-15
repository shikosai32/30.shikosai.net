FROM nginx

RUN apt update
RUN apt install git
RUN git clone -b teaser https://github.com/ibcnit-shikosai/shikosai_30.git