"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["0.490db.bundle.js","9b5deb4605282780c8fcdfa9d2399e97"],["0.490db.bundle.js.gz","09184397b35f60ed2f4c03fb3900de50"],["1.490db.bundle.js","a617aafdc6480e92b8b24eb8da8e6489"],["1.490db.bundle.js.gz","64dc0b9e9077b4bfaf9ac53125a4c417"],["10.490db.bundle.js","53ba38d1a43549662964aa07946595f1"],["10.490db.bundle.js.gz","8edda3d3e092af71daa8b8893e10e117"],["11.490db.bundle.js","b48e5fc5bf1ce9e2eca46a4fb53e35d0"],["11.490db.bundle.js.gz","498505493fad68a9d9c3cd119a63b599"],["12.490db.bundle.js","eff0993d1e16bb2e2341794b9c915878"],["12.490db.bundle.js.gz","95a329a397a7fd10e03c4d0af6316bfb"],["13.490db.bundle.js","4771435e1c441165234da812cc0cd926"],["13.490db.bundle.js.gz","a13790f16312f53a222a99dbb3ea8045"],["14.490db.bundle.js","0f6630975fbdb05cf9b477790a804f42"],["14.490db.bundle.js.gz","cb01541dade1961a61fb62093c540dbe"],["15.490db.bundle.js","49954862b85df6505e6004316b47165e"],["15.490db.bundle.js.gz","71008c6335ee7b303584f1081b492f73"],["17.490db.bundle.js","698bc04b176b31ed90edfab73c80471d"],["17.490db.bundle.js.gz","4c4042feea0ea1b3bc71230c286cbbd1"],["18.490db.bundle.js","5bdd8627cdd3de54c1d0f3feff088214"],["18.490db.bundle.js.gz","13e1457147c1babd77210267c60faf96"],["19.490db.bundle.js","5523896eb8122d854523cb5eee5fe18b"],["19.490db.bundle.js.gz","449d21962185faa25091e15f80fc77a5"],["2.490db.bundle.js","e135fd8e4df924d05a58a1406643e27a"],["2.490db.bundle.js.gz","d1236e2021bdc68ab462594a1b515deb"],["20.490db.bundle.js","39d309cd6627a1b5a2d91965d88d5ed3"],["20.490db.bundle.js.gz","89d4e00fc84907b699e6c1505ef7caeb"],["21.490db.bundle.js","4175f5ccee677c20cddb38b1df2fd565"],["21.490db.bundle.js.gz","f2e8ecc7d28e2780250b07cb6a92d0c5"],["22.490db.bundle.js","dcfc3e8463d6d7fa6b5c5a7cb96619ca"],["22.490db.bundle.js.gz","62e1fa8f100529e0c7f40031f6fca4dd"],["23.490db.bundle.js","9e502aba6ad16963b6e6bf88846e9908"],["23.490db.bundle.js.gz","31c53d95b2a6a0f8a2f1021b48169908"],["24.490db.bundle.js","c51ad5454d286423430580287309925f"],["24.490db.bundle.js.gz","8e0cb1d0f12e3f790a10a3b42c0d68f6"],["25.490db.bundle.js","e30473fe61a9c1086ee36c8f392e2b48"],["25.490db.bundle.js.gz","918d58af6b760616abcb74b9eed6607a"],["26.490db.bundle.js","92205e72cacd4da657cbed543939609a"],["26.490db.bundle.js.gz","5088adcda5e2af1a73d41845e008bdc1"],["3.490db.bundle.js","e7760e6cebd10c4e13b68a44fb64a7d9"],["3.490db.bundle.js.gz","b905422290d1f9bf8ed30e6ff7e8841b"],["4.490db.bundle.js","751418877433c8e5d28237941741e6f1"],["4.490db.bundle.js.gz","10f74b539881d77863ef0eba57b9031d"],["5.490db.bundle.js","678abb446f4bff7ad105d7b8a78fe9af"],["5.490db.bundle.js.gz","bb46edcdd5709aa325f64797372c3fb4"],["6.490db.bundle.js","2a5bd24792d36dadcd1cbabccc36c422"],["6.490db.bundle.js.gz","4a68bf35af804b6c555736f9a5412a3b"],["7.490db.bundle.js","ac215949b0fb9898a88841f32f875a4a"],["7.490db.bundle.js.gz","3ac6278323cf140e9d0f15acd2fc6787"],["8.490db.bundle.js","2f6da20a67f26b80fc0492cb24f11e53"],["8.490db.bundle.js.gz","27853c0fd2aedfec547c72c25b8f7d53"],["arrow-9e79eeeb691.svg","9e79eeeb6912a707fe62663e155ee655"],["checked-d587020e137.svg","d587020e137877329c65ffadf117d315"],["chunk-manifest.json","d866d57c53371b26adba0760e22a521c"],["clear-45fde9c263b.svg","45fde9c263bba4b2abfb07d94d9264bf"],["fav-04164/android-chrome-144x144.png","16d9f21d41034f0e88b5e4b8bd7dd91c"],["fav-04164/android-chrome-192x192.png","41a9749ce8fbe2735a7b9edd4484e9a2"],["fav-04164/android-chrome-256x256.png","730d63d2af8c7863e52c22dc9dc77ca9"],["fav-04164/android-chrome-36x36.png","fcc6eb3f50b4ed5e23f029c8c7b42bc8"],["fav-04164/android-chrome-384x384.png","ad1f66520688db9f3b7d7c47265174b2"],["fav-04164/android-chrome-48x48.png","5517a504a2108ae4afc6f7eb0bc57c3d"],["fav-04164/android-chrome-512x512.png","8789ead5024121d5fede54e41c1d1e54"],["fav-04164/android-chrome-72x72.png","aa39b57a50c1ed654f8e3ade16df71e0"],["fav-04164/android-chrome-96x96.png","a21358279e084ab829176f01c2be9667"],["fav-04164/apple-touch-icon-114x114.png","5a1bddab360017949f4810de09fc98df"],["fav-04164/apple-touch-icon-120x120.png","2c888fa544301297b2cbd4662e67b1f7"],["fav-04164/apple-touch-icon-144x144.png","16d9f21d41034f0e88b5e4b8bd7dd91c"],["fav-04164/apple-touch-icon-152x152.png","d9ec15d377ec12a4a74941618769666c"],["fav-04164/apple-touch-icon-167x167.png","1b7daffb7558ea597f2a804e0e525863"],["fav-04164/apple-touch-icon-180x180.png","b0f94bf0f8cffa835431c65bacd44c24"],["fav-04164/apple-touch-icon-57x57.png","c422e54a17eeddd365f508d90c2ef126"],["fav-04164/apple-touch-icon-60x60.png","0ad56150376a48cac7228297a3702afc"],["fav-04164/apple-touch-icon-72x72.png","aa39b57a50c1ed654f8e3ade16df71e0"],["fav-04164/apple-touch-icon-76x76.png","5e446178e160a0ec302b3b930784f0a1"],["fav-04164/apple-touch-icon-precomposed.png","b0f94bf0f8cffa835431c65bacd44c24"],["fav-04164/apple-touch-icon.png","b0f94bf0f8cffa835431c65bacd44c24"],["fav-04164/browserconfig.xml","c01bb9b01c4571fac95d2a3c2eff8cd8"],["fav-04164/favicon-16x16.png","4c6943d1c7bec7ce856d1ecd6ba93c91"],["fav-04164/favicon-32x32.png","5e7e7b422020566d9791ee9a5622df88"],["fav-04164/favicon.ico","d397f43d7e651ef956ba981d383db47b"],["fav-04164/firefox_app_128x128.png","69b3e6537799952c185be881c4ff5756"],["fav-04164/firefox_app_512x512.png","7cd3919a23be2de57bf49db9bdeae572"],["fav-04164/firefox_app_60x60.png","12e21639d830e9548e4254e3dc38b709"],["fav-04164/manifest.json","517597c877f1f8368e6ef17b0b9cab16"],["fav-04164/manifest.webapp","91299f8a52a9a268f4e6f57e7bfc0cb8"],["fav-04164/mstile-144x144.png","16d9f21d41034f0e88b5e4b8bd7dd91c"],["fav-04164/mstile-150x150.png","7f10befc0e1b508475866a706a8c3601"],["fav-04164/mstile-310x150.png","02a001e961c4282d00b587c8d4dffd27"],["fav-04164/mstile-310x310.png","5bc252974b0d4c59b775310bb06eb9d7"],["fav-04164/mstile-70x70.png","2659709a86c962dd0efafe19311476c8"],["images/airplane.svg","586d64ab983ab582856fff7af29c7b82"],["images/icons/clear-cache.svg","0b7c7b66a550f8e31c1890796c391823"],["images/icons/exchange.svg","b511fdfcd89f97ef214b016dd255c83c"],["images/icons/settings.svg","cbb0ea8a8d52306295ee6a8d6d6c0688"],["images/icons/sitemap.svg","1fade86d5413f423bbef77e8656d3b41"],["images/icons/stats.svg","4531d3de45040a7af16d9631e309c62d"],["images/icons/storage.svg","d7205ea20e8617036c8dc05daa251c55"],["images/icons/todo.svg","87b66af7563be307ca2f00b7147cd0e0"],["images/lightning.svg","558468300fb7da4fd6d7a9a2952d6e6e"],["images/logo.svg","04164e9eff9756a40e01e3744e4062a9"],["images/notifications.svg","dc30b03f236e0e0abd6b8b8aedade537"],["images/react.svg","3ec4491df4dd73d70ae988b1b4ae0632"],["index.html","8d3bf7d5c5a6b7d07913edea57824530"],["lightning-cf9b63de1db.svg","cf9b63de1dbda295e8b95d5b377c3ff3"],["manifest.json","b0eea1c69454bd2e907ce1dbfa2030d9"],["react-259c73a64be.svg","259c73a64be29af4d444a79c30cffccc"],["settings-44ffc217e98.svg","44ffc217e98883e09e1a8192eb2a9db6"],["styles.490db.bundle.js","e0df71b61d99433553d7a74bff15a654"],["vendor.490db.js","9f18fc27ee011e08c1e6a2e1a8f1bef8"],["webpack-manifest.json","078ac573e007128338f636329b616b86"]],cacheName="sw-precache-v3-RS-PWA-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var d=new URL(e);return"/"===d.pathname.slice(-1)&&(d.pathname+=a),d.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,d,c){var b=new URL(e);return c&&b.pathname.match(c)||(b.search+=(b.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(d)),b.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var d=new URL(a).pathname;return e.some(function(e){return d.match(e)})},stripIgnoredUrlParameters=function(e,a){var d=new URL(e);return d.hash="",d.search=d.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),d.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],d=e[1],c=new URL(a,self.location),b=createCacheKey(c,hashParamName,d,!1);return[c.toString(),b]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(d){if(!a.has(d)){var c=new Request(d,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+d+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(d,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(d){return Promise.all(d.map(function(d){if(!a.has(d.url))return e.delete(d)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,d=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(d);a||(d=addDirectoryIndex(d,"index.html"),a=urlsToCacheKeys.has(d));a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(d)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});