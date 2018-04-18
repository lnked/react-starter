// interface T {
//     getAttribute? (name: string): void;
// }

export default function SvgFixer () {
    const baseUrl = window.location.href.replace(window.location.hash, '')
    const useList = document.querySelectorAll('use[*|href]')

    Object.keys(useList).map((id: any) => {
        // const use: T = useList[id]
        const use: any = useList[id]

        if (use.getAttribute('xlink:href').indexOf('#') === 0) {
            use.setAttribute('xlink:href', baseUrl + use.getAttribute('xlink:href'))
        }
    })
}
