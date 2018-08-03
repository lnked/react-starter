export const imports = {
  'src/docz/hello.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-docz-hello" */ 'src/docz/hello.mdx'),
  'src/components/button/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-button" */ 'src/components/button/button.mdx'),
}
