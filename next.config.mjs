import mdx from '@next/mdx'

const withMDX = mdx({ extension: /\.mdx?$/ })

export default withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx', 'md']
})
