const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
});
