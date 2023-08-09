import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

import ResponsiveAppBar from './ResponsiveAppBar'
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
      <ThemeProvider theme={theme}>
        <body className={inter.className} style={{ margin: 0 }}>
          <ResponsiveAppBar />
          <Box sx={{ mx: { xs: 3, md: 10 }, mt: { xs: 2, md: 2 } }}>
            {children}
          </Box>
          <Footer />
        </body>
      </ThemeProvider>

    </html>

  )
}
