#!/usr/bin/env sh
set -e

REMOTE_REPO=`git remote get-url --push origin`
COMMIT_INFO=`git describe --all --always --long`
BUILD_DIR="dist"
REMOTE_BRANCH="gh-pages"

ROOT_DIR=$(cd `dirname $0`/..; pwd)
cd ${ROOT_DIR}

# 生成静态文件
pnpm -r install && pnpm docs:build

# 进入生成的文件夹
cd $BUILD_DIR || exit
echo 'haijunit.top' > CNAME
git init
git add -A
git commit -m "deploy, $COMMIT_INFO"
git push -f $REMOTE_REPO HEAD:$REMOTE_BRANCH

cd -
rm -rf $BUILD_DIR
echo "VitePress site deployed successfully to Gitee Pages!"
