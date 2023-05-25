import NextNProgress from 'nextjs-progressbar'
import Head from 'next/head'
import React from 'react'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import Script from 'next/script'
import { MuiThemeProvider } from '../themes'
import createEmotionCache from '../createEmotionCache'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <>
      <Head>
        <title>MultiBit</title>
        <link rel="icon" href="favicon.svg" />
        <link rel="apple-touch-icon" href="favicon.svg" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="MultiBit breaks down the barrier between the BTC and EVm chains, allowing you to easily transfer assets and conduct transactions between popular blockchains. Let’s embrace the future of blockchain with our cutting-edge cross-chain bridge solution."
        />
        <meta name="keywords" content="MultiBit,MultiBit Bridge,BRC20 Bridge" />
      </Head>

      <CacheProvider value={emotionCache}>
        <MuiThemeProvider>
          <NextNProgress color="primary" height={2} />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </CacheProvider>

      {/* Google analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8FXZJEB2E9" />
      <Script
        id="googleAnalytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8FXZJEB2E9');
            `,
        }}
      />
    </>
  )
}

export default App
