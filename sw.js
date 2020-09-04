"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Moelody"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"1003e2fe24bf886a1f8b4362c42de160",url:"./404.html"},{revision:"7247610a15d4b907791857e9289e78e0",url:"./about/index.html"},{revision:"56f36a95edaee4457faeb1599768cf7a",url:"./archives/2020/05/index.html"},{revision:"422041dd0ea51d9205bd9ecf6f0c8b31",url:"./archives/2020/06/index.html"},{revision:"85601d0ef856e99bf57bba6be4b0791a",url:"./archives/2020/07/index.html"},{revision:"bee5aa3b8417f6fd595f15fe1480e7f7",url:"./archives/2020/08/index.html"},{revision:"7729bbdd8343651e432b1f0499d8a392",url:"./archives/2020/index.html"},{revision:"4ef6afe0dd48ce8d3b173cec71ff8594",url:"./archives/index.html"},{revision:"356a72cacbbea36ccc3f6d528c8b673d",url:"./background/index.html"},{revision:"65271cfa312881e57473c51c6150d8a9",url:"./categories/index.html"},{revision:"8fe2fb35ce6f7d418c5c690d85c7d107",url:"./categories/博客/Hexo/index.html"},{revision:"c5144946258c6c9cc0fbc740b34aab2f",url:"./categories/博客/index.html"},{revision:"d9baffecaa4dbb28edbca97c0d34e6a9",url:"./categories/测试/index.html"},{revision:"dcfe8826906640fe0939de4da453a52e",url:"./categories/笔记/ffmpeg/index.html"},{revision:"89ed9bd205afcb641ea4ceab8ff88548",url:"./categories/笔记/index.html"},{revision:"a386f26e0ab1101f5bcaeaf14cd53e65",url:"./categories/笔记/常用/index.html"},{revision:"ee21c7086a59d52b97a9e7b6240a9414",url:"./css/blog-encrypt.css"},{revision:"594fbb77982342d3c424704eb853138e",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"9e6cffe233754ceb2e0eafa6a652b658",url:"./demo/index.html"},{revision:"49a22e07c86b142103c2995fae6bcd81",url:"./Gallery/index.html"},{revision:"b9639695be2848d2b9101c5b4c29d45e",url:"./Gallery/wallpaper/index.html"},{revision:"a72dbc1c41dfeae34eb75e6136039b76",url:"./go.html"},{revision:"f1c05d571ac5dda904ba18fb07bb471e",url:"./iconfont/index.html"},{revision:"f88fa1f8810f35ca72be0dec1a41f0db",url:"./img/pwa/manifest.json"},{revision:"2fb7eefe2a1c0f67faac99e3b4822e75",url:"./index.html"},{revision:"790cd2f28594f8affbd4a450037c48ff",url:"./js/main.js"},{revision:"b27508f4724a121800f85efbb4a4e36a",url:"./js/pikaday.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"64d1e1837ad1a585888f5d1e16c71f77",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"f91ea1a86a5c45e344a24fb437642f36",url:"./js/utils.js"},{revision:"f1c932790ec55934e04634fd752a3d8e",url:"./lib/blog-encrypt.js"},{revision:"6ea0b2934923faf6e53aee7da78a8780",url:"./link/index.html"},{revision:"3cbb97658c97ef15daa0a0a49dd4a562",url:"./messageboard/index.html"},{revision:"9819260ee3a2a7aefc9f99ed4f3efa23",url:"./musics/index.html"},{revision:"447092a71768fb6d72f4f3312d2ef209",url:"./posts/31e4c77c/index.html"},{revision:"0a8e8f92eb8778596f8ab2034915e3c3",url:"./posts/492571b8/index.html"},{revision:"0dbf10a7a684087dab83b3a1c634434d",url:"./posts/4f62ec51/index.html"},{revision:"f5e13a64e49d60194f5d8487fab2fd15",url:"./posts/8df660ab/index.html"},{revision:"0e73ddb9ac69b0fbad71da5afe220302",url:"./posts/bb9a879a/index.html"},{revision:"10012ef9bfdaef3172c3998eadebfca2",url:"./posts/cf8e3b18/index.html"},{revision:"fde508688855d029faa0a00366518a59",url:"./posts/d78f4fea/index.html"},{revision:"1d1c0359b216e400ce04c1be15f2717d",url:"./share/index.html"},{revision:"1e911555a58b18aebdf99f642a11dc98",url:"./speak/index.html"},{revision:"2cacbec08fe9ee3b3d4b53e6974dbd07",url:"./tags/bat/index.html"},{revision:"05587dcfd796b4c0dd15981e13eb93e7",url:"./tags/butterfly/index.html"},{revision:"dd0e9bc8b5fb8873a8768685e94ebd99",url:"./tags/button/index.html"},{revision:"0ba998c6918da31302431d841d0622c7",url:"./tags/cmd/index.html"},{revision:"cf89814d17370f96e8328ed199ddeaf6",url:"./tags/encrypt/index.html"},{revision:"054a35ec35f3e5f41bb27d75525ac2c8",url:"./tags/ffmpeg/index.html"},{revision:"1c4bb5e51c44ad95302ea98533a84435",url:"./tags/front-matter/index.html"},{revision:"2f7e6722662f9a8a9f60dba66e3017d6",url:"./tags/gif/index.html"},{revision:"190f791d3dc92ba2e76ac430e4869ee2",url:"./tags/hexo/index.html"},{revision:"dec2f0c95431314c0f69b5aaf6631a6b",url:"./tags/index.html"},{revision:"d8e5dda4d60736e73c5a7c1451319516",url:"./tags/mp4/index.html"},{revision:"7769b2b5cab97907bde55a2b97eb5543",url:"./tags/tags/index.html"},{revision:"b10efd3062494048d67c03b274d6bc1e",url:"./tags/terminal/index.html"},{revision:"cba7f2a0fbea3aaa5969482cd2f04664",url:"./tags/webm/index.html"},{revision:"aaeb34a3b89d7cf3f1103a31a75fcd3b",url:"./tags/魔改/index.html"},{revision:"270980d4320ec607d6db4784fb11ebbc",url:"./vercel.json"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();