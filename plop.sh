#!/bin/sh
$(dirname "$0")/node_modules/plop/src/plop.js --plopfile $(dirname "$0")/plopfile.js "$@";
exit $?;
