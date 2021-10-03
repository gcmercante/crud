#!/bin/bash

run () {
    echo "docker-compose \
    -f docker-compose.yml \
    up \
    -d"
}

if [[ $1 == "--frontend-logs" ]]
  then
    eval "docker logs -f frontend-crud"
fi

if [[ $1 == "--backend-logs" ]]
  then
    eval "docker logs -f backend-crud"
fi

if [[ $1 == "--migration" ]]
  then
    eval "docker exec -it backend-crud yarn typeorm migration:generate -n Deployment"
    eval "docker exec -it backend-crud yarn typeorm migration:run"
fi

eval $(run)