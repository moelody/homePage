"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Moelody"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c193e4f51a9adf2c7dea778b0042121f",url:"./404.html"},{revision:"b0992378ef7f42ab43aa2072ef3e6d00",url:"./about/index.html"},{revision:"777439e694d6acf218038730bd38810a",url:"./archives/2020/05/index.html"},{revision:"ec2a55d81595c01b893051abb3cba8e9",url:"./archives/2020/06/index.html"},{revision:"b68a67f16aab91af2acb5a32fa818499",url:"./archives/2020/07/index.html"},{revision:"140512f1d319b23456a67dd4291e67a3",url:"./archives/2020/08/index.html"},{revision:"c108d9facb8403f129800f583b2004bd",url:"./archives/2020/index.html"},{revision:"1ee57f130c80e04970b8fe153cd6e2db",url:"./archives/index.html"},{revision:"c9fb359cbb055b2f242aa7815e6ff717",url:"./background/index.html"},{revision:"5cdd4e5734de99ac21fc8a3e64b4f5ab",url:"./categories/index.html"},{revision:"161074845f6787665a0f120ca7aac108",url:"./categories/博客/Hexo/index.html"},{revision:"324acda29ceebd142e7eee52591799ef",url:"./categories/博客/index.html"},{revision:"cc7754e5e96de242f11438fb5ffecd7c",url:"./categories/测试/index.html"},{revision:"784bc05147d5dbec4a3aba56ac8ece98",url:"./categories/笔记/ffmpeg/index.html"},{revision:"48129de0952701b2df4b1d9e99810723",url:"./categories/笔记/index.html"},{revision:"9424e9e973c3cdea8970a8c66878bd33",url:"./categories/笔记/常用/index.html"},{revision:"ee21c7086a59d52b97a9e7b6240a9414",url:"./css/blog-encrypt.css"},{revision:"594fbb77982342d3c424704eb853138e",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"e62cfc58e039204f75c8dc63a33206b6",url:"./demo/index.html"},{revision:"057a4864309c0ec72d3c10dcd8b06006",url:"./Gallery/index.html"},{revision:"9e85a80b33ef8399b450de8e9fc79f12",url:"./Gallery/wallpaper/index.html"},{revision:"a72dbc1c41dfeae34eb75e6136039b76",url:"./go.html"},{revision:"838862b3df166f30e1f99576ee71d2e4",url:"./iconfont/index.html"},{revision:"f88fa1f8810f35ca72be0dec1a41f0db",url:"./img/pwa/manifest.json"},{revision:"50a3ab593b6f1983a8485b225a739c2c",url:"./index.html"},{revision:"790cd2f28594f8affbd4a450037c48ff",url:"./js/main.js"},{revision:"b27508f4724a121800f85efbb4a4e36a",url:"./js/pikaday.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"64d1e1837ad1a585888f5d1e16c71f77",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"f91ea1a86a5c45e344a24fb437642f36",url:"./js/utils.js"},{revision:"f1c932790ec55934e04634fd752a3d8e",url:"./lib/blog-encrypt.js"},{revision:"831fce58d6ce05bde9f86b1fe03ee4ce",url:"./link/index.html"},{revision:"bb93f7718152f47dca8a3c2be4b8589f",url:"./messageboard/index.html"},{revision:"78406b34c53ebb55d7b2c81f1b40b105",url:"./musics/index.html"},{revision:"59018bb2fa6f4514d10247dd4946db6d",url:"./posts/31e4c77c/index.html"},{revision:"1d9c6603bfa125a240f50ffd91581393",url:"./posts/492571b8/index.html"},{revision:"335e8cb0c18b615eb5321c3898f4a714",url:"./posts/4f62ec51/index.html"},{revision:"660d6a867268ff2457cefedc19b34fa7",url:"./posts/8df660ab/index.html"},{revision:"a2909e22b655d58be959e08765b1d27f",url:"./posts/bb9a879a/index.html"},{revision:"6c381ca21c50ffaf772d5d6d1168f147",url:"./posts/cf8e3b18/index.html"},{revision:"7413599be3bc5045f3d640848a422d46",url:"./posts/d78f4fea/index.html"},{revision:"7540bd1b19e0035ccc9d08a8a4ee51e4",url:"./share/index.html"},{revision:"96948278fdd3a80cfeeef73d425a07bc",url:"./speak/index.html"},{revision:"aa93cff158b6585956a665b99f37e5f3",url:"./tags/bat/index.html"},{revision:"d0256c0f906398f1842b672832233107",url:"./tags/butterfly/index.html"},{revision:"a372bc144040aaead74e811cc81a3a25",url:"./tags/button/index.html"},{revision:"9ec0916ed1e10590146532263aac9718",url:"./tags/cmd/index.html"},{revision:"2a32043eecf222a7c4d661abab0d29db",url:"./tags/encrypt/index.html"},{revision:"5f8aa8d1aa7086758a42c2236282a1a4",url:"./tags/ffmpeg/index.html"},{revision:"a9d372652adaa730b37e3789ddf10c16",url:"./tags/front-matter/index.html"},{revision:"731d8556e0b19ae99534f59637cef543",url:"./tags/gif/index.html"},{revision:"62f4e1c9e178656bf91d633c5960bd09",url:"./tags/hexo/index.html"},{revision:"855dee206220f63acdd2ecf609936d32",url:"./tags/index.html"},{revision:"6a976bd5e0a793351b9e467d6812b7dc",url:"./tags/mp4/index.html"},{revision:"ccd18abf6ca7fc78eeb5122b76922513",url:"./tags/tags/index.html"},{revision:"8bee5f5ae7a234f128d7361dab7179f9",url:"./tags/terminal/index.html"},{revision:"85ac4978985f8b1e9fe5491338510cf8",url:"./tags/webm/index.html"},{revision:"5fc22cea651d6676178ddede86389f04",url:"./tags/魔改/index.html"},{revision:"270980d4320ec607d6db4784fb11ebbc",url:"./vercel.json"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();