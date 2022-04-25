# 自动化打包同时将打包后的代码发布到gh-pages分支
git add -A
git commit -m 'master'
git pull gitee master
git push gitee master
# 1.打包
npm run src:build

# 2.进入打包目录
cd dist

# 3.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add origin https://github.com/zhoubichuan/web-interview.git
git push -f origin gh-pages

# 4.返回初始目录
cd - 