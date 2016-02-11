#!/bin/sh

set -e

cd "$(dirname "$0")"
rm -rf node_modules

../bin.js ./

node index.js

rm -rf node_modules