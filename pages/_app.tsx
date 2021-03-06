import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

// import '@fontsource/inter/variable-full.css'
import '@fontsource/ia-writer-quattro'
import '@fontsource/ia-writer-mono'
import '@fontsource/noto-sans-sc'
import '@fontsource/noto-sans-tc'
// import '@fontsource/ia-writer-duo'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const X = Component as unknown as React.FC
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableColorScheme={false}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <X {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
