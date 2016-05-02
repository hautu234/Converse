#!/bin/bash
echo "starting killing nodejs processes"
killall -9 nodejs
echo "finished killing nodejs"
echo "start killing off mongod"
killall -9 mongod
echo "start checking repository"
git status && git fetch
echo "switching to master"
git checkout master
echo "pull the latest code"
git pull
echo "start mongod"
mongod 
echo "start nodejs"
forever start app.js &
echo "kill off  apache2"
killall -9 apache2
echo "start apache2"
service start apache2

echo "finish deployment"
