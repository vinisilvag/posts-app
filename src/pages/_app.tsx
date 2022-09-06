import React from 'react'
import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'

import { withTRPC } from '@trpc/next'
import { ServerRouter } from '@server/router'

import '@styles/globals.css'

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default withTRPC<ServerRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_UR
      ? `https://${String(process.env.VERCEL_URL)}/api/trpc`
      : 'http://localhost:3000/api/trpc'
    return {
      url
    }
  },
  ssr: true
})(MyApp)
