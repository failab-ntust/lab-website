"use client"
import React from 'react';
import { Box, Stack, Typography, Grid, ListItem } from '@mui/material'
import ViewStreamIcon from '@mui/icons-material/ViewStream';

import ImageCarousel from './ImageCarousel'
import LatestNews from './LatestNews'
import Image from 'next/image';

const Title = ({ title }: any) => (
  <ListItem disableGutters>
    <ViewStreamIcon fontSize="large" color='secondary' sx={{ mr: 1 }} />
    <Typography variant="h5" noWrap sx={{ lineHeight: 'normal' }}>
      {title}
    </Typography>
  </ListItem>
)

const StickyAnnouncement = () => (
  <Stack>
    <Stack direction='row' alignItems='baseline' spacing={{ xs: .5, sm: 1 }}>
      <Image src={`/fire.gif`} alt='fire' width={30} height={30} />
      <Typography sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h6', lg: 'h5' } }}>實驗室成員募集中，歡迎資管所甲組；管研所EDBA、EMBA及MBA碩博士同學一起開疆闢土</Typography>
    </Stack>
    <Stack direction='row' alignItems='baseline' spacing={{ xs: .5, sm: 1 }}>
      <Image src={`/fire.gif`} alt='fire' width={30} height={30} />
      <Typography sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h6', lg: 'h5' } }}>歡迎各系所大學部同學參加專題及競賽</Typography>
    </Stack>
  </Stack>
)

export default function Home() {
  return (
    <Box my={2}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid size={{ xs: 4, sm: 8, md: 12 }}>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', md: 'flex-start' } }}>
            <Stack justifyContent='space-evenly'>
              <Typography sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h6', lg: 'h5' }, color: '#777777' }}>
                臺灣科技大學
              </Typography>
              <Typography sx={{ typography: { xs: { fontSize: 28 }, sm: 'h3', md: { fontSize: 45 }, lg: 'h3', fontWeight: '700 !important' } }}>
                金融科技與人工智慧實驗室
              </Typography>
              <Typography sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h6', lg: 'h5' } }}>
                Fintech and Artificial Intelligence Lab
              </Typography>
              <br />
              <StickyAnnouncement />
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 4, sm: 8, md: 7.5 }} >
          <Title title='最新消息' />
          <LatestNews />
        </Grid>

        <Grid size={{ xs: 4, sm: 8, md: 4.5 }} >
          <Title title='活動剪影' />
          <ImageCarousel />
        </Grid>

      </Grid>
    </Box>
  )
}

