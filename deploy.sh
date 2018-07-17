#!/bin/sh

git pull https://github.com/ibcnit-shikosai/shikosai_30.git

str=`docker ps -a | grep shikosai.net`
if test "${str}" != "" ; then
    docker stop shikosai.net
    docker rm shikosai.net
fi

docker run -d -p 80:80 --name shikosai.net nginx
docker cp ./ shikosai.net:/usr/share/nginx/30
docker exec shikosai.net cp /usr/share/nginx/30/teaser.conf /etc/nginx/conf.d/teaser.conf
docker restart shikosai.net