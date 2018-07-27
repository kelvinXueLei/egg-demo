#!/bin/bash

cnpm install
pm2 delete lino-server

export HOST= 
export SERVICE_PORT=
export EGG_SERVER_ENV='test'

pm2 start ./server.js --name="server"

