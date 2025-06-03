import '../styles/globals.css'
import FloatingResumeButton from '../components/FloatingResumeButton'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <FloatingResumeButton />
    <Component {...pageProps} />
  </>)
}

export default MyApp
