#!/bin/bash
#ファイルサーバーのパスをWindowsからMacに変換
pbpaste | sed -E 's/\\+/smb:\/\//' | sed -E 's/\\/\//g' | tr -d '\n' | pbcopy