#!/bin/sh
if [ "$2" = "" ]; then
    git archive --format=zip --prefix=diff/ HEAD `git diff --name-only HEAD $1` -o /Users/kouji-happa/Desktop/diff.zip
else
    git archive --format=zip --prefix=diff/ $1 `git diff --name-only $1 $2` -o /Users/kouji-happa/Desktop/diff.zip
fi