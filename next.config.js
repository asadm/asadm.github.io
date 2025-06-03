const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
});
// Rebuild trigger Mon Jun  2 23:08:16 MDT 2025
// Force rebuild with correct assets Mon Jun  2 23:09:41 MDT 2025
// Trigger rebuild after fixing photo.jpg Mon Jun  2 23:12:03 MDT 2025
// Force clean rebuild Mon Jun  2 23:12:56 MDT 2025
// Rebuild after adding eager loading to images Mon Jun  2 23:17:39 MDT 2025
// Clean rebuild with verified file structure Mon Jun  2 23:21:31 MDT 2025
