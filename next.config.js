const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  swcMinify: false,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
});
