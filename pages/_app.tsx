import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script strategy="beforeInteractive">
        {'console.log("DYNAMIC INLINE SCRIPT RENDERED");'}
      </Script>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: 'console.log("dangerouslySetInnerHTML SCRIPT RENDERED");' }}
      />
    </>
  )
}

export default MyApp
