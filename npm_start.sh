#!/bin/bash

systemctl stop firewalld
webstorm.sh 2>/dev/null &
npm start
