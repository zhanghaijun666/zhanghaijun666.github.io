#!/bin/sh
fpm -s dir -t rpm -n mytest -v 1.0.0 --iteration 1 -C source -f -p output --prefix /opt/helloworldtest --after-install sh/install_after.sh --after-remove sh/uninstall_after.sh
