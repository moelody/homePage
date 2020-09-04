"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Moelody"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"8f6429467a16e4dd5f2108663e336595",url:"./404.html"},{revision:"5c763977f4f9b570651aeb6bb32c6c5f",url:"./about/index.html"},{revision:"fc6ac04216f22cf3a9d270baad4ffc8b",url:"./archives/2020/05/index.html"},{revision:"eebda0fedcaef32618af604629e782bd",url:"./archives/2020/06/index.html"},{revision:"d174a248c2be2f856d8ac1c5be745d24",url:"./archives/2020/07/index.html"},{revision:"85b8e85b13f66fc83d34f751ae4a3ed8",url:"./archives/2020/08/index.html"},{revision:"15c893d463c2880631d52dd347f58b2b",url:"./archives/2020/index.html"},{revision:"247752350149632084d94789662fbb5d",url:"./archives/index.html"},{revision:"fb055d99afa36d1aa50d49702cb782d4",url:"./background/index.html"},{revision:"e40c44368eb5642bfd2df5829ab505ad",url:"./categories/index.html"},{revision:"1a8ce068535d45c4d5c58c6011b2a237",url:"./categories/博客/Hexo/index.html"},{revision:"62cc3e52a478497385a6885dd87230cb",url:"./categories/博客/index.html"},{revision:"89fac298b0c6508d05d88b0311b5a0cf",url:"./categories/测试/index.html"},{revision:"7fb632aec6a055897bae2330f2424aa6",url:"./categories/笔记/ffmpeg/index.html"},{revision:"d54d8cc6906e7105b3d90f0692f58d4e",url:"./categories/笔记/index.html"},{revision:"ef2aa748310b255d6c524143d4cf07da",url:"./categories/笔记/常用/index.html"},{revision:"ee21c7086a59d52b97a9e7b6240a9414",url:"./css/blog-encrypt.css"},{revision:"594fbb77982342d3c424704eb853138e",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"3c80a69826cf8ba1c3c50f47ca5f5047",url:"./demo/index.html"},{revision:"c03175c0f487831622a3b714fc1995d0",url:"./Gallery/index.html"},{revision:"468cb13fe2c82faed886975bed0dcb24",url:"./Gallery/wallpaper/index.html"},{revision:"a72dbc1c41dfeae34eb75e6136039b76",url:"./go.html"},{revision:"7552a1ddd301c9a5b76cf87d4a5d7221",url:"./iconfont/index.html"},{revision:"f88fa1f8810f35ca72be0dec1a41f0db",url:"./img/pwa/manifest.json"},{revision:"3c3e6bfc07be99d12109db6985ab5d35",url:"./index.html"},{revision:"790cd2f28594f8affbd4a450037c48ff",url:"./js/main.js"},{revision:"b27508f4724a121800f85efbb4a4e36a",url:"./js/pikaday.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"6bebed368a1bbcb630dd146cefb103b7",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"64d1e1837ad1a585888f5d1e16c71f77",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"bd869d5fd54e2fe1f1eeee7c46fa46bc",url:"./js/tw_cn.js"},{revision:"f91ea1a86a5c45e344a24fb437642f36",url:"./js/utils.js"},{revision:"f1c932790ec55934e04634fd752a3d8e",url:"./lib/blog-encrypt.js"},{revision:"98564400d6130db67d8eec9ffd32dfdc",url:"./link/index.html"},{revision:"f3d2b2d97832391fd71475ecb48b484e",url:"./messageboard/index.html"},{revision:"ffdd505197190c7d887e02ab91da3e1b",url:"./musics/index.html"},{revision:"ec9db3010dc5bc9d86c9c66c1af16cc8",url:"./posts/31e4c77c/index.html"},{revision:"def6c53ffe1bac33973e0a79f4346b87",url:"./posts/492571b8/index.html"},{revision:"0a5bc6bfd09f2b5570e1d0dab1ef4eb1",url:"./posts/4f62ec51/index.html"},{revision:"5aa5dcece0be1f1e0595566d12c3ac97",url:"./posts/8df660ab/index.html"},{revision:"b49f2fd40d2a216444481eb7d55813db",url:"./posts/bb9a879a/index.html"},{revision:"432991fd4eefd00a0f8b578c81412a14",url:"./posts/cf8e3b18/index.html"},{revision:"2ec2ed06824ef832b675b9485a18caf2",url:"./posts/d78f4fea/index.html"},{revision:"826c1a921abf43919f27fda047487900",url:"./share/index.html"},{revision:"5e9ac4977587e1e05154a789d5f264e9",url:"./speak/index.html"},{revision:"199af068127f0c42f48d06129c1b729f",url:"./tags/bat/index.html"},{revision:"c5588a41f593bfec28a17791bcd7b98c",url:"./tags/butterfly/index.html"},{revision:"41733c8f3d62f6afb46af416a6ef9378",url:"./tags/button/index.html"},{revision:"1f9f94b0fca42d3a6803291ff19f3c6c",url:"./tags/cmd/index.html"},{revision:"e475a1d9febe5c361c0a339d51d5aeaf",url:"./tags/encrypt/index.html"},{revision:"ab4eb19f18b603010f0ee5242c193223",url:"./tags/ffmpeg/index.html"},{revision:"51756d77a553878ea6a87832d68012bf",url:"./tags/front-matter/index.html"},{revision:"0c7fe99bc6d3082af9339c52340ca983",url:"./tags/gif/index.html"},{revision:"056ee50ceebd90a3918007943a8e6fae",url:"./tags/hexo/index.html"},{revision:"7af3e827550b4aaf87e1793fcb722df9",url:"./tags/index.html"},{revision:"3d1a760d315fe753b3f4c9166334e0c6",url:"./tags/mp4/index.html"},{revision:"319eb2f42fa5d79b3dc9247110f9d5a6",url:"./tags/tags/index.html"},{revision:"7de114761ab6148041d0bcb615763f76",url:"./tags/terminal/index.html"},{revision:"8fad0324a3ded91d84cbf8587a065686",url:"./tags/webm/index.html"},{revision:"e24b7d49bd2574003cf449525ca4623d",url:"./tags/魔改/index.html"},{revision:"270980d4320ec607d6db4784fb11ebbc",url:"./vercel.json"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();