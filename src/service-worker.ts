// 'use strict'

// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('v1').then((cache) => {
//             return cache.addAll([
//                 '/sw-test/',
//                 '/sw-test/index.html',
//                 '/sw-test/style.css',
//                 '/sw-test/app.js',
//                 '/sw-test/image-list.js',
//                 '/sw-test/star-wars-logo.jpg',
//                 '/sw-test/gallery/bountyHunters.jpg',
//                 '/sw-test/gallery/myLittleVader.jpg',
//                 '/sw-test/gallery/snowTroopers.jpg'
//             ])
//         })
//     )
// })

// self.addEventListener('fetch', (event) => {
//     event.respondWith(caches.match(event.request).then((response) => {
//         // caches.match() always resolves
//         // but in case of success response will have value
//         if (response !== undefined) {
//             return response
//         } else {
//             return fetch(event.request).then((response) => {
//                 // response may be used only once
//                 // we need to save clone to put one copy in cache
//                 // and serve second one
//                 let responseClone = response.clone()

//                 caches.open('v1').then((cache) => {
//                     cache.put(event.request, responseClone)
//                 })
//                 return response
//             }).catch(() => {
//                 return caches.match('/sw-test/gallery/myLittleVader.jpg')
//             })
//         }
//     }))
// })

//
//
//
//
// serviceWorkerRegistration.showNotification(title, options)

// self.addEventListener('fetch', (event) => {
//     // Check if the current request is 2G or slow 2G
//     if (/\slow-2g|2g/.test(navigator.connection.effectiveType)) {
//         // Check if the request is for an image
//         if (/\.jpg$|.png$|.gif$|.webp$/.test(event.request.url)) {
//             event.respondWith(
//                 fetch('placeholder.svg', {
//                     mode: 'no-cors'
//                 })
//             )
//         }
//     }
// })

// // experimental
// const imgLoad = (url) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()

//         request.open('GET', url)
//         request.responseType = 'blob'

//         request.onload = () => {
//             if (request.status === 200) {
//                 resolve(request.response)
//             } else {
//                 reject(Error('Image didn\'t load successfully error code:' + request.statusText))
//             }
//         }

//         request.onerror = () => {
//             reject(Error('There was a network error.'))
//         }

//         request.send()
//     })
// }

// // usage

// const body = document.querySelector('body')
// const myImage = new Image()

// imgLoad('myLittleVader.jpg').then((response) => {
//     const imageURL = window.URL.createObjectURL(response)
//     myImage.src = imageURL
//     body.appendChild(myImage)
// }, (Error) => {
//     console.log(Error)
// })

// // Register
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then((reg) =>{
//         // регистрация сработала
//         console.log('Registration succeeded. Scope is ' + reg.scope)
//     }).catch((error) => {
//         // регистрация прошла неудачно
//         console.log('Registration failed with ' + error)
//     })
// }

// // Caching
// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('v1').then((cache) => {
//             return cache.addAll([
//                 '/sw-test/',
//                 '/sw-test/index.html',
//                 '/sw-test/style.css',
//                 '/sw-test/app.js',
//                 '/sw-test/image-list.js',
//                 '/sw-test/star-wars-logo.jpg',
//                 '/sw-test/gallery/',
//                 '/sw-test/gallery/bountyHunters.jpg',
//                 '/sw-test/gallery/myLittleVader.jpg',
//                 '/sw-test/gallery/snowTroopers.jpg'
//             ])
//         })
//     )
// })

// this.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('v2').then((cache) => {
//             return cache.addAll([
//                 '/sw-test/',
//                 '/sw-test/index.html',
//                 '/sw-test/style.css',
//                 '/sw-test/app.js',
//                 '/sw-test/image-list.js',
//                 // включение других ресурсов для новой версии...
//             ])
//         })
//     )
// })

// this.addEventListener('activate', (event) => {
//     var cacheWhitelist = ['v2']

//     event.waitUntil(
//         caches.keys().then((keyList) => {
//             return Promise.all(keyList.map((key) => {
//                 if (cacheWhitelist.indexOf(key) === -1) {
//                     return caches.delete(key)
//                 }
//             }))
//         })
//     )
// })

// this.addEventListener('fetch', (event) => {
//     const response
//     event.respondWith(caches.match(event.request).then(() => {
//         return fetch(event.request)
//     }).then((r) => {
//         response = r
//         caches.open('v1').then((cache) => {
//             cache.put(event.request, response)
//         })
//         return response.clone()
//     }).catch(function () {
//         return caches.match('/sw-test/gallery/myLittleVader.jpg')
//     }))
// })

// // Cache example
// const CACHE_NAME = 'my-pwa-cache-v1'
// const urlsToCache = [
//     '/',
//     '/styles/styles.css',
//     '/script/webpack-bundle.js'
// ]

// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => {
//                 // Open a cache and cache our files
//                 return cache.addAll(urlsToCache)
//             })
//     )
// })
