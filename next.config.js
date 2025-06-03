const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
});
// Rebuild trigger Mon Jun  2 23:08:16 MDT 2025
