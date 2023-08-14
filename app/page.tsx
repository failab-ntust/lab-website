"use client"
import { Box, Stack, Typography, Grid, ListItem, ListItemText, ListItemAvatar } from '@mui/material'
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import Carousel from './Carousel'


const Title = ({ title }: any) => (
  <ListItem disableGutters>
    <ViewStreamIcon fontSize="large" color='secondary' sx={{ mr: 1 }} />
    <Typography variant="h5" noWrap sx={{ lineHeight: 'normal' }}>
      {title}
    </Typography>
  </ListItem>
)

const News = ({ date, content, subcontent }: any) => (
  <ListItem>
    <ListItemAvatar sx={{ bgcolor: (theme) => theme.palette.primary.main, borderRadius: 1, mr: 1 }}>
      {date}
    </ListItemAvatar>
    <ListItemText primary={content}
      secondary={subcontent} />
  </ListItem>
)

export default function Home() {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

        <Grid item xs={4} sm={8} md={7.5} >
          <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', md: 'flex-start' }, pt: 3, pb: 2.5 }}>
            <Stack justifyContent='space-evenly'>
              <Typography sx={{ typography: { xs: 'h6', sm: 'h5' }, color: '#777777' }}>
                臺灣科技大學 管理學士班
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

          <Box sx={{ bgcolor: '#F5F5F5', borderRadius: 5, p: { xs: 0, md: 1.5 }, minHeight: 200, overflowY: 'auto' }}>
            <News date='2022/12' content='第五屆法遵科技與電腦稽核專題競賽 – 亞軍' subcontent='指導學生：管理學士班 – 郁庭、芷綾、卉萱、亭蓁、家萱' />

            <News date='2022/11' content='通過國科會計畫通過 – 在保護個人隱私下建構跨產業資料共享框架' subcontent='' />

            <News date='2022/11' content='研究論文 ”Diversity-Optimized Group Extraction in Social Networks” 接受' subcontent='' />
          </Box>
        </Grid>

        <Grid item xs={4} sm={8} md={4.5} >
          <Title title='活動剪影' />
          <Carousel />
        </Grid>

      </Grid>
    </Box>
  )
}

