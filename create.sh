#!/bin/bash
# Author:
#   justforuse<allenforuse@gmail.com>
# Program:
#   Generate multi language version post
# Note:
#   1. Run this script under hugo website path
#   2 . File name is required

if [ "$1" == "" ]; then
  echo "Error: Post name required!"
  exit
else 
  hugo new --kind post-en en-us/post/$1.md
  # Get unique disqusIdentifier
  sleep 2
  hugo new --kind post zh-cn/post/$1.md
fi
