#!/bin/sh

if [ "$#" -ne "1" ]; then
    echo "Usage: update.sh [DockerID or DockerTAG]"
    exit
fi

#docker exec -w /usr/share/nginx/teaser $1 git checkout teaser
docker exec -w /usr/share/nginx/30 $1 git pull
docker exec -w /usr/share/nginx/30 $1 cp /usr/share/nginx/teaser/teaser.conf /etc/nginx/conf.d/teaser.conf