import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { I18nContextProvider } from '@contexts/i18n'
import MainLayout from '@layouts/MainLayout'
import theme from '@styles/theme'
import '@styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <I18nContextProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </I18nContextProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}
