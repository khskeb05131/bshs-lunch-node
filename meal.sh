#!/bin/bash

WRITELOG=`date +write%y%m%d%H%M%S`
node write.js > ./log/$WRITELOG.log
