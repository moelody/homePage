"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Moelody"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d8b2983667e38a7eaf7b99312d00e331",url:"./404.html"},{revision:"308cb7141b4f5b2fb5904ae958f9684c",url:"./about/index.html"},{revision:"a0fa1be971334bd48680681d69a8f248",url:"./archives/2020/05/index.html"},{revision:"114e36b1588c0b8cda2c6df39c5a65ae",url:"./archives/2020/06/index.html"},{revision:"56d89f58878fe6a73bf1d9e8e29de486",url:"./archives/2020/07/index.html"},{revision:"f02af2ef2cac14f8dfcbad8783a005d1",url:"./archives/2020/08/index.html"},{revision:"f9faf5f9eb2477455c704f82458b27e4",url:"./archives/2020/index.html"},{revision:"ba94aabec1ec332e0c700f88c8338b2e",url:"./archives/index.html"},{revision:"0bdc56604d53b5ec77b30b9b4993030d",url:"./background/index.html"},{revision:"2841831ceb1d7cb0e2a2b897eadd663a",url:"./categories/index.html"},{revision:"3128995cdf686f3860ca885da38c2bcf",url:"./categories/博客/Hexo/index.html"},{revision:"d477439fbd1a197a48236e3ecfcce907",url:"./categories/博客/index.html"},{revision:"65d78aa03a17a5763ba89ce8b2a6cf47",url:"./categories/测试/index.html"},{revision:"d8202f3a918c64ec03dd3fc0d6bf2010",url:"./categories/笔记/ffmpeg/index.html"},{revision:"3c49a053ed469d54c2efea2a80807761",url:"./categories/笔记/index.html"},{revision:"1815354c67d0c160567704065e7f1d3e",url:"./categories/笔记/常用/index.html"},{revision:"ee21c7086a59d52b97a9e7b6240a9414",url:"./css/blog-encrypt.css"},{revision:"594fbb77982342d3c424704eb853138e",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"72c6116941ff0bbf508bae060bc0ed0b",url:"./demo/index.html"},{revision:"942cc3de3436b20577e38c1330b0342a",url:"./Gallery/index.html"},{revision:"9108e510d203f8a3ed242b4f403abf0c",url:"./Gallery/wallpaper/index.html"},{revision:"a72dbc1c41dfeae34eb75e6136039b76",url:"./go.html"},{revision:"634138eaf60aea13bcd7f8e60c0159d6",url:"./iconfont/index.html"},{revision:"f88fa1f8810f35ca72be0dec1a41f0db",url:"./img/pwa/manifest.json"},{revision:"1168d5135da37c8135fb36241d4e726d",url:"./index.html"},{revision:"790cd2f28594f8affbd4a450037c48ff",url:"./js/main.js"},{revision:"b27508f4724a121800f85efbb4a4e36a",url:"./js/pikaday.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"64d1e1837ad1a585888f5d1e16c71f77",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"f91ea1a86a5c45e344a24fb437642f36",url:"./js/utils.js"},{revision:"f1c932790ec55934e04634fd752a3d8e",url:"./lib/blog-encrypt.js"},{revision:"6eff4e6ffafed07ffe54de6c17a98110",url:"./link/index.html"},{revision:"bd417cc31af11de92a1bce5ec3dd1eb3",url:"./messageboard/index.html"},{revision:"b1dc398249e97c441949abe8706a7a5d",url:"./musics/index.html"},{revision:"c9256445d44ce001be85beec25594bca",url:"./posts/31e4c77c/index.html"},{revision:"87258c6245563713ec77af67f93b25b0",url:"./posts/492571b8/index.html"},{revision:"a29b1853aa874ae4c1e6076b0f11c6c9",url:"./posts/4f62ec51/index.html"},{revision:"7466b605ff526c38dd17e7035feeccaf",url:"./posts/8df660ab/index.html"},{revision:"4b82a43bd703672ce0b792ff7e448149",url:"./posts/bb9a879a/index.html"},{revision:"32f04659bf32f6263dc596fcf3d35df8",url:"./posts/cf8e3b18/index.html"},{revision:"54d088d93901c2fc57a2464ad798ff84",url:"./posts/d78f4fea/index.html"},{revision:"87e682c54720402e9227beb37a7868ec",url:"./share/index.html"},{revision:"01be0aa87251e78c29ca08ed481c50c7",url:"./speak/index.html"},{revision:"675006e5354dca00d929692582877004",url:"./tags/bat/index.html"},{revision:"cb15c541b0bb9a7941b43d42205e8c21",url:"./tags/butterfly/index.html"},{revision:"37516f623ddda359e9e52fc5bc8be887",url:"./tags/button/index.html"},{revision:"c557c0a4c5b9ef99da2f7ba77a5e92cf",url:"./tags/cmd/index.html"},{revision:"7179cb673eb83bfdcb9de16827e55932",url:"./tags/encrypt/index.html"},{revision:"d66a510fa9a6cf9e127fd548948146c7",url:"./tags/ffmpeg/index.html"},{revision:"280d47741dd47d190d07ed43fb0b9660",url:"./tags/front-matter/index.html"},{revision:"be0bfb1d5bbf52e2ae433de6f3c1696b",url:"./tags/gif/index.html"},{revision:"cf0cc89c3ed27231546a5e932df81013",url:"./tags/hexo/index.html"},{revision:"6f40c043a47bb29bc28c898c9ecc8a61",url:"./tags/index.html"},{revision:"d53277c0ce9e6ea9d3b54e0e55bb154b",url:"./tags/mp4/index.html"},{revision:"7e49da76b9d57a11d381ba57beabfcad",url:"./tags/tags/index.html"},{revision:"8090c6c5cb894ef1d73cd4467225d5b0",url:"./tags/terminal/index.html"},{revision:"8a8715912408ee1e22e8f985e4e6e180",url:"./tags/webm/index.html"},{revision:"04aed1d52ce295f2b4019b5ff3af8e5a",url:"./tags/魔改/index.html"},{revision:"270980d4320ec607d6db4784fb11ebbc",url:"./vercel.json"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();