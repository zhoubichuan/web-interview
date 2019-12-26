#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run src:build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://zhoubichuan.github.io
# git push -f git@github.com:zhoubichuan/zhoubichuan.github.io.git master

# 如果发布到 https://zhoubichuan.github.io/Web-Interview
# git push -f git@github.com:zhoubichuan/Web-Interview.git master:gh-pages

cd -
