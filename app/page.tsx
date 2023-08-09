"use client"
import { Box, Typography, Grid, ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar, List } from '@mui/material'
import Image from 'next/image'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Carousel from './Carousel'



export default function Home() {
  return (
    <>


      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, sm: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          <Grid item xs={4} sm={8} md={7} >
            <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', md: 'flex-start' }, py: 3 }}>
              {/* <Image
                src='/fintech.png'
                alt='fintech'
                width={150}
                height={150}
              /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <Typography sx={{ typography: { xs: 'h6', sm: 'h5' }, color: '#777777' }}>
                  臺灣科技大學 管理學士班
                </Typography>
                <Typography sx={{ typography: { xs: 'h4', sm: 'h3', fontWeight: '700 !important' } }}>
                  金融科技與人工智慧實驗室
                </Typography>
                <Typography sx={{ typography: { xs: 'h6', sm: 'h5' } }}>
                  Fintech and Artificial Intelligence Lab
                </Typography>
              </Box>
            </Box>

            <ListItem disableGutters>
              <MonetizationOnIcon fontSize="large" sx={{ mr: 1, color: "#FFD700", }} />
              <Typography variant="h5" noWrap sx={{ lineHeight: 'normal' }}>
                最新消息
              </Typography>
            </ListItem>
            <Box sx={{ bgcolor: '#F5F5F5', borderRadius: 5, p: { xs: 0, md: 1.5 }, maxHeight: 300, overflowY: 'auto' }}>
              <ListItem>
                <ListItemAvatar sx={{ bgcolor: '#FFD700', borderRadius: 1, mr: 1 }}>
                  2022/12
                </ListItemAvatar>
                <ListItemText primary="第五屆法遵科技與電腦稽核專題競賽 – 亞軍"
                  secondary="指導學生：管理學士班 – 郁庭、芷綾、卉萱、亭蓁、家萱" />
              </ListItem>

              <ListItem>
                <ListItemAvatar sx={{ bgcolor: '#FFD700', borderRadius: 1, mr: 1 }}>
                  2022/11
                </ListItemAvatar>
                <ListItemText primary="通過國科會計畫通過 – 在保護個人隱私下建構跨產業資料共享框架" />
              </ListItem>

              <ListItem>
                <ListItemAvatar sx={{ bgcolor: '#FFD700', borderRadius: 1, mr: 1 }}>
                  2022/11
                </ListItemAvatar>
                <ListItemText primary="研究論文 ”Diversity-Optimized Group Extraction in Social Networks” 接受" />
              </ListItem>

            </Box>
          </Grid>

          <Grid item xs={4} sm={8} md={5} >
            <Box>
              <ListItem disableGutters>
                <MonetizationOnIcon fontSize="large" sx={{ mr: 1, color: "#FFD700", }} />
                <Typography variant="h5" noWrap sx={{ lineHeight: 'normal' }}>
                  活動剪影
                </Typography>
              </ListItem>

              <Carousel />
            </Box>

          </Grid>
        </Grid>
      </Box >


      {/* <Box sx={{
        position: 'absolute',
        bottom: 0,
        bgcolor: '#48abe0',
        // height: 200,
        // width: '100%',
        // borderRadius: '15rem 15rem 0 0',
        border: '2px solid black'
      }} /> */}



    </>
  )
}

