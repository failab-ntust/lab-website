"use client"
import React from 'react';
import { Box, Stack, Typography, Grid, ListItem } from '@mui/material'
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ImageCarousel from './ImageCarousel'
import LatestNews from './LatestNews'

const Title = ({ title }: any) => (
  <ListItem disableGutters>
    <ViewStreamIcon fontSize="large" color='secondary' sx={{ mr: 1 }} />
    <Typography variant="h5" noWrap sx={{ lineHeight: 'normal' }}>
      {title}
    </Typography>
  </ListItem>
)

export default function Home() {
  return (
    <Box mt={7}>
      <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

        <Grid item xs={4} sm={8} md={7.5} >
          <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', md: 'flex-start' }, pt: 2, pb: 2.5 }}>
            <Stack justifyContent='space-evenly'>
              <Typography sx={{ typography: { xs: 'h6', sm: 'h5' }, color: '#777777' }}>
                臺灣科技大學
              </Typography>
              <Typography sx={{ typography: { xs: 'h4', sm: 'h3', fontWeight: '700 !important' } }}>
                金融科技與人工智慧實驗室
              </Typography>
              <Typography sx={{ typography: { xs: 'h6', sm: 'h5' } }}>
                Fintech and Artificial Intelligence Lab
              </Typography>
            </Stack>
          </Box>

          <Title title='最新消息' />
          <LatestNews />

        </Grid>

        <Grid item xs={4} sm={8} md={4.5} >
          <Title title='活動剪影' />
          <ImageCarousel />
        </Grid>

      </Grid>
    </Box>
  )
}

