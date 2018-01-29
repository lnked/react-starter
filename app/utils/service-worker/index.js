export default function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', {scope: './'})
      .catch((error) => {
        console.log('NOOP: ', error)
      })
  }
}
