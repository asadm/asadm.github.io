import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {Thumbnail} from '../../components/blogthumbnail'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import moment from 'moment'
import Link from 'next/link'
import Head from "../../components/head";
import GitHubIssues from '../../components/github-issues'
import readingTime from '../../components/reading-time'
const components = { /*Nav, Button,*/ SyntaxHighlighter, Thumbnail }
const data = { docco }

const PostPage = ({ frontMatter: { title, date, issue }, mdxSource, readingTime }) => {
  return (
    <div className="mt-4 blog">
      <Head 
      title={title}
    />
      <h1>{title}</h1>
      <div className='meta'>
      <div className='subscribe-text'>
      <Link href="/blog/"><a className=''>Back</a></Link> | <a href="/feed.xml">Subscribe with RSS</a> or <a href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fasadmemon.com%2Ffeed.xml">via Feedly</a>.
      </div>
        <br/>
        <span className='date' title={moment(date).format("dddd, MMMM Do YYYY")}>
          {moment(date).fromNow()} | {readingTime} min read
        </span>
        
      </div>
      <MDXRemote {...mdxSource} components={components} scope={data} />
      {issue && <GitHubIssues issueId={issue} />}
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('blogposts')).filter(filename => !filename.startsWith('_') && !filename.startsWith('.'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '').replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  let markdownWithMeta;
  try {
    markdownWithMeta = fs.readFileSync(path.join('blogposts',
      slug + '.mdx'), 'utf-8')
  } catch (e) {
    markdownWithMeta = fs.readFileSync(path.join('blogposts',
      slug + '.md'), 'utf-8')
  }

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      readingTime: readingTime(content)
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage