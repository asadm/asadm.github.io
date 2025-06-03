import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div className="header-container">
            <h1 id="logo" className="text-center"><a href="/">Jonathan<b>Solomon</b></a></h1>
            <ul className="menu">
              <li><a href="/projects">All Projects</a></li>
              <li><a href="/talks">Talks</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a target="_blank" href="https://jonny.substack.com/">Newsletter</a></li>
              <li><a target="_blank" href="https://github.com/jonnysol">Github</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/jonnysol/">LinkedIn</a></li>
              <li><a target="_blank" href="http://instagram.com/jonnysowl">Instagram</a></li>
            </ul>
          </div>

          <div className="content-container">
            <Main />
            <NextScript />
            <div className="footer">
              <p>jonny.sh [<a href="https://github.com/jonnysol/jonny.sh" target="_blank">source code</a>].</p>
            </div>
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
