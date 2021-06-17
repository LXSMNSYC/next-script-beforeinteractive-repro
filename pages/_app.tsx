import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script strategy="beforeInteractive">
        {'console.log("RENDERED");'}
      </Script>
    </>
  )
}
export default MyApp
