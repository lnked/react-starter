// export const SvgFixer = () => {
//     const baseUrl = window.location.href.replace(window.location.hash, '')
//     const useList = document.querySelectorAll('use[*|href]')

//     Object.keys(useList).map(id => {
//         const use = useList[id]

//         if (use.getAttribute('xlink:href').indexOf('#') === 0) {
//             use.setAttribute('xlink:href', baseUrl + use.getAttribute('xlink:href'))
//         }
//     })
// }

// export default SvgFixer
