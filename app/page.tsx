"use client"
import { Box, Typography, Paper, Grid, BottomNavigation, Container, Link, ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar } from '@mui/material'
import Image from 'next/image'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function Home() {
  return (
    <>


      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, sm: 0 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          <Grid item xs={4} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src='/fintech.png'
              alt='fintech'
              width={150}
              height={150}
            />
          </Grid>
          <Grid item xs={4} md={8} sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
            <Typography variant="h5" sx={{ fontFamily: 'monospace', color: '#777777' }}>
              臺灣科技大學 <br /> 管理學院 管理學士班
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: 'monospace', fontWeight: 700 }}>
              金融科技與人工智慧實驗室
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ bgcolor: '#F5F5F5', borderRadius: 5, mt: 5 }}>
        <ListItem>
          <MonetizationOnIcon fontSize="large" sx={{ mr: 1, color: "#FFD700", }} />
          <Typography variant="h5" noWrap sx={{ lineHeight: 'normal' }}>
            最新消息
          </Typography>
        </ListItem>

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

