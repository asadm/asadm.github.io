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
        <div className="container">
          <h1 id="logo" className="text-center"><a href="/">Asad<b>Memon</b></a></h1>
          <ul className="menu">
            <li><a href="/projects">All Projects</a></li>
            <li><a href="/talks">Talks</a></li>

            <li><a target="_blank" href="https://asad.substack.com/">Newsletter</a></li>
            <li><a target="_blank" href="https://github.com/asadm">Github</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/memonasad/">LinkedIn</a></li>
            <li><a target="_blank" href="http://instagram.com/snapmemon">Instagram</a></li>
          </ul>

          <Main />
          <NextScript />

          <div className="footer">
            <p>AsadMemon.com [<a href="https://github.com/asadm/asadm.github.io" target="_blank">source code</a>].</p>
          </div>
        </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
