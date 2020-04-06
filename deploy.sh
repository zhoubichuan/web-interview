#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'master'
git pull origin master
git push -u origin master
git push origin master
# 生成静态文件
npm run src:build

# 进入生成的文件夹
cd dist


git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add origin https://github.com/zhoubichuan/Web-Interview.git
git push -f origin gh-pages

cd -
