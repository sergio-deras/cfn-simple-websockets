#!/bin/bash

if [[ $# != 1 ]]; then
    echo "Error, usage: /do.sh [-b --build] | [-d --deploy] | [-e --eliminate]"
    exit 1
fi

key="$1"

case $key in
    -b|--build|-d|--deploy)
    echo "Starting SAM build"
    cmd "/C sam build"
    ;;&
    -d|--deploy)
    echo "Starting deployment"
    cmd "/C sam deploy --no-confirm-changeset"
    ;;
    -e|--eliminate)
    echo "Deleting stack" 
    cmd "/C aws cloudformation delete-stack --stack-name api-web-socket-app"
    ;;
    *)
    echo "Error, usage: /do.sh [-b --build] | [-d --deploy] | [-e --destroy]"
    ;;
esac
