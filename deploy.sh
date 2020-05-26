# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'example.com' > CNAME

echo Deploying..
git init
git remote add origin git@github.com:malarahfelipe/malarahfelipe.github.io.git
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# deploy
git push -f origin gh-pages

cd ..
