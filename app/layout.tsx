import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Box, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

import NavBar from './NavBar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

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
        <link rel="icon" href='/favicon.ico' sizes="any" />
        <link rel='icon' href='/coin.png' />
        <link rel="apple-touch-icon" href="/coin-apple-icon.png" />
      </head>
      <ThemeProvider theme={theme}>
        <body className={inter.className} style={{ margin: 0 }}>
          <Container disableGutters maxWidth='xl' sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />
            <Box flex={9} sx={{ mx: { xs: 3, md: 10 }, mb: { xs: 3, md: 2 }, mt: 10 }}>
              {children}
            </Box>
            <Box flex={1}>
              <Footer />
            </Box>
          </Container>
        </body>
      </ThemeProvider>
    </html>
  )
}
