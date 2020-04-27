npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@gitee.com:recoluan/work.git master

cd ../
rm -rf public