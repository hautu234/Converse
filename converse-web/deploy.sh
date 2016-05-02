#!/bin/bash
echo "starting killing nodejs processes"
killall -9 nodejs
echo "finished killing nodejs"
echo "start killing off mongod"
sudo service  mongod stop
echo "start checking repository"
git status && git fetch
echo "switching to master"
git checkout master
echo "pull the latest code"
git pull
echo "start mongod"
sudo service mongod start 
echo "start nodejs"
forever start app.js &
echo "kill off apache2"
sudo service apache2 stop
echo "start apache2"
sudo service apache2 start
echo "finish deployment"
