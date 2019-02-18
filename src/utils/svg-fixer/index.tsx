const SvgFixer = () => {
  const pattern = 'xlink:href'
  const baseUrl: string = window.location.origin || `${window.location.protocol}://${window.location.host}`
  const useList: any = document.querySelectorAll('use[*|href]')

  if (Object.keys(useList).length) {
    Object.keys(useList).map(id => {
      const use = useList[id]
      const attributes = use.getAttribute(pattern)

      if (attributes.indexOf('#') === 0) {
        use.setAttribute(pattern, baseUrl + attributes)
      }
    })
  }
}

export default SvgFixer
