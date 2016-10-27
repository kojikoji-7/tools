#!/bin/sh
if [ "$2" = "" ]; then
    git archive --format=zip --prefix=diff/ HEAD `git diff --diff-filter=AMCR --name-only $1 HEAD` -o /Users/kouji-happa/Desktop/diff.zip
else
    git archive --format=zip --prefix=diff/ $1 `git diff --diff-filter=AMCR --name-only $2 $1` -o /Users/kouji-happa/Desktop/diff.zip
fi