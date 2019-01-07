// // In production, we register a service worker to serve assets from local cache.

// // This lets the app load faster on subsequent visits in production, and gives
// // it offline capabilities. However, it also means that developers (and users)
// // will only see deployed updates on the "N+1" visit to a page, since previously
// // cached resources are updated in the background.

// // To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// // This link also includes instructions on opting out of this behavior.

// const isLocalhost = Boolean(
//     window.location.hostname === 'localhost' ||
//       // [::1] is the IPv6 localhost address.
//       window.location.hostname === '[::1]' ||
//       // 127.0.0.1/8 is considered localhost for IPv4.
//       window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
//   )

//   export function register(config: any) {
//     if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//       // The URL constructor is available in all browsers that support SW.
//       const publicUrl = new URL(process.env.PUBLIC_URL!, window.location.toString())
//       if (publicUrl.origin !== window.location.origin) {
//         // Our service worker won't work if PUBLIC_URL is on a different origin
//         // from what our page is served on. This might happen if a CDN is used to
//         // serve assets; see https://github.com/facebook/create-react-app/issues/2374
//         return
//       }

//       window.addEventListener('load', () => {
//         const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

//         if (isLocalhost) {
//           // This is running on localhost. Let's check if a service worker still exists or not.
//           checkValidServiceWorker(swUrl, config)

//           // Add some additional logging to localhost, pointing developers to the
//           // service worker/PWA documentation.
//           navigator.serviceWorker.ready.then(() => {
//             console.log('This web app is being served cache-first by a service ' +
//                              'worker. To learn more, visit https://goo.gl/SC7cgQ')
//           })
//         } else {
//           // Is not local host. Just register service worker
//           registerValidSW(swUrl, config)
//         }
//       })
//     }
//   }

//   function registerValidSW(swUrl: string, config: any) {
//     navigator.serviceWorker
//       .register(swUrl)
//       .then(registration => {
//         registration.onupdatefound = () => {
//           const installingWorker = registration.installing
//           if (installingWorker) {
//             installingWorker.onstatechange = () => {
//               if (installingWorker.state === 'installed') {
//                 if (navigator.serviceWorker.controller) {
//                   // At this point, the old content will have been purged and
//                   // the fresh content will have been added to the cache.
//                   // It's the perfect time to display a "New content is
//                   // available; please refresh." message in your web app.
//                   console.log('New content is available; please refresh.')

//                   // Execute callback
//                   if (config.onUpdate) {
//                     config.onUpdate(registration)
//                   }
//                 } else {
//                   // At this point, everything has been precached.
//                   // It's the perfect time to display a
//                   // "Content is cached for offline use." message.
//                   console.log('Content is cached for offline use.')

//                   // Execute callback
//                   if (config.onSuccess) {
//                     config.onSuccess(registration)
//                   }
//                 }
//               }
//             }
//           }
//         }
//       })
//       .catch(error => {
//         console.error('Error during service worker registration:', error)
//       })
//   }

//   function checkValidServiceWorker(swUrl: string, config: any) {
//     // Check if the service worker can be found. If it can't reload the page.
//     fetch(swUrl)
//       .then(response => {
//         // Ensure service worker exists, and that we really are getting a JS file.
//         if (response.status === 404 || response.headers.get('content-type')!.indexOf('javascript') === -1) {
//           // No service worker found. Probably a different app. Reload the page.
//           navigator.serviceWorker.ready.then(registration => {
//             registration.unregister().then(() => {
//               window.location.reload()
//             })
//           })
//         } else {
//           // Service worker found. Proceed as normal.
//           registerValidSW(swUrl, config)
//         }
//       })
//       .catch(() => {
//         console.log('No internet connection found. App is running in offline mode.')
//       })
//   }

//   export function unregister() {
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.ready.then(registration => {
//         registration.unregister()
//       })
//     }
//   }

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
