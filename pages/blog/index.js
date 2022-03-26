import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import moment from 'moment'
import Head from "../../components/head";
import readingTime from '../../components/reading-time'

const Home = ({ posts }) => {
  return (
    <div className="mt-5 blog">
      <Head
        title="Blog Posts"
      />
      <h1 className="">Posts</h1>
      <div className='subscribe-text'>
        <a href="/feed.xml">Subscribe with RSS</a> or <a href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fasadmemon.com%2Ffeed.xml">via Feedly</a>.
      </div>
      {posts.sort((a, b) =>
        moment(b.frontMatter.date).unix() - moment(a.frontMatter.date).unix()
      ).map((post, index) => (
        <div key={post.frontMatter.title} className="list-item">
          <div className="col-md-8">
            <div className="card-body">
              <Link href={'/blog/' + post.slug} passHref key={index}>
                <a className='heading-link'>
                  <h3 className="card-title">{post.frontMatter.title}</h3>
                </a>
              </Link>
              <p className="desc">{post.frontMatter.description}
                <Link href={'/blog/' + post.slug} passHref key={index}>
                  <a className='read-more-link'>Read More →</a>
                </Link>
              </p>
              <p className="date" title={moment(post.frontMatter.date).format("dddd, MMMM Do YYYY")}>
                {moment(post.frontMatter.date).fromNow()} | {post.readingTime} min read
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('blogposts'))

  const posts = files.filter(filename => !filename.startsWith('_') && !filename.startsWith('.')).map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('blogposts', filename), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0],
      readingTime: readingTime(content)
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Home