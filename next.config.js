const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
});
