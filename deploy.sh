#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./dist

# 如果是发布到自定义域名
# echo 'rooon-k.top' > CNAME

git init
git add -A
git commit -m 'deploy'

git branch -M main
git remote add origin git@github.com:Rooon-K/rooon-k.github.io.git
git push -f git@github.com:Rooon-K/rooon-k.github.io.git master