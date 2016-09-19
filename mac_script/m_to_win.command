#!/bin/bash
#ファイルサーバーのパスをMacからWindowsに変換
pbpaste | sed 's/\/Volumes/\\\\192.168.0.240/g' | sed 's/\//\\/g' | tr -d '\n' | pbcopy