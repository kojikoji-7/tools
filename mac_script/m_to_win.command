#!/bin/bash
#ファイルサーバーのパスをMacからWindowsに変換
pbpaste | sed 's/\/Volumes/\\\\192.168.0.240/g' | sed 's/\//\\/g' | tr -d '\n' | iconv -f UTF-8-MAC -t UTF-8 | pbcopy