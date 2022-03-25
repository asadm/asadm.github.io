// based on code from https://github.com/vercel/next.js/tree/canary/examples/blog
const fs = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const moment = require('moment')

async function generate() {
  const feed = new RSS({
    title: 'Asad Memon',
    site_url: 'https://asadmemon.com',
    feed_url: 'https://asadmemon.com/feed.xml'
  })

  const posts = await fs.promises.readdir(path.join(__dirname, '..', 'blogposts'))
  posts
    .filter(filename => !filename.startsWith('_') && !filename.startsWith('.'))
    .map(filename => {
      const markdownWithMeta = matter(fs.readFileSync(path.join(__dirname, '..', 'blogposts', filename), 'utf-8'))
      return {
        frontMatter: markdownWithMeta.data,
        slug: filename.split('.')[0]
      }
  }).sort((a, b) => 
    moment(b.frontMatter.date).unix() - moment(a.frontMatter.date).unix()
  ).forEach(async (post) => {

    
    const frontmatter = post.frontMatter
    feed.item({
      title: frontmatter.title,
      url: '/blog/' + post.slug,
      date: moment(frontmatter.date).format("YYYY/MM/DD"),
      description: frontmatter.description
    })
  })

  await fs.promises.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()