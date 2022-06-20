#!/bin/bash

set -exo pipefail
BASEDIR=$(cd $(dirname "$0"); cd ../; pwd -P)

cd $BASEDIR
pnpm i
pnpm build
node ./scripts/deploy.js
