#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'master'
git remote add origin https://github.com/zhoubichuan/Web-Interview.git
git pull origin master
git push -u origin master
git push origin master
# 生成静态文件
npm run src:build

# 进入生成的文件夹
cd dist


git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/zhoubichuan/Web-Interview.git
git checkout origin/gh-pages
git checkout -b gh-pages
git pull origin gh-pages
git push -u origin gh-pages
git push origin gh-pages 

cd -
