hugo -d blog

echo 'Copying service worker file...'

mv blog/res/sw-v2.js blog/zh-cn/

echo 'Copying manifest file...'
mv blog/res/manifest.json blog/zh-cn/
