npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@git.coding.net:recoluan/work.git master

git push -f git@gitee.com:recoluan/work.git page

cd ../
rm -rf public