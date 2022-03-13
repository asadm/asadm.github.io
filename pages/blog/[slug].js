import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import moment from 'moment'
import Link from 'next/link'
import Head from "../../components/head";


const components = { /*Nav, Button,*/ SyntaxHighlighter }
const data = { docco }

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <div className="mt-4 blog">
      <Head 
      title={title}
    />
      <h1>{title}</h1>
      <div className='meta'>
        <Link href="/blog/"><a className='link-back'>Back</a></Link>
        <span className='date' title={moment(date).format("dddd, MMMM Do YYYY")}>
          {moment(date).fromNow()}
        </span>
        
      </div>
      <MDXRemote {...mdxSource} components={components} scope={data} />
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('blogposts'))

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
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage