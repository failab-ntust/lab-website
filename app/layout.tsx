import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { Box, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

import NavBar from './NavBar'
import Partners from './Partners'
import Footer from './Footer'

export const metadata: Metadata = {
  title: '金融科技與人工智慧實驗室',
  description: '臺灣科技大學-金融科技與人工智慧實驗室',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EG3XE7K718" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'G-EG3XE7K718');
        `}
        </Script>
        <link rel="icon" href='/favicon.ico' sizes="any" />
        <link rel='icon' href='/coin.png' />
        <link rel="apple-touch-icon" href="/coin-apple-icon.png" />
      </head>
      <ThemeProvider theme={theme}>
        <body className={inter.className} style={{ margin: 0 }}>
          <Container disableGutters maxWidth={false} sx={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <NavBar />
            <Box flex={9} sx={{ mx: { xs: 3, sm: 6, md: 10 }, mb: { xs: 3, md: 2 }, mt: 8 }}>
              {children}
            </Box>
            <Box flex={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Partners />
            </Box>
            <Box flex={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Footer />
            </Box>
          </Container>
        </body>
      </ThemeProvider>
    </html>
  )
}
