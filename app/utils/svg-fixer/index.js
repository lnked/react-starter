export default function SvgFixer () {
    const baseUrl = window.location.href.replace(window.location.hash, '')
    const useList = document.querySelectorAll('use[*|href]')

    useList.forEach((use) => {
        if (use.getAttribute('xlink:href').indexOf('#') === 0) {
            use.setAttribute('xlink:href', baseUrl + use.getAttribute('xlink:href'))
        }
    })
}
