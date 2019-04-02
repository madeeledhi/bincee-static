#!/bin/bash -x
forever stop static
sudo lsof -t -i tcp:9000 -s tcp:listen | sudo xargs kill
forever start --uid "static" -a -c node app.js
