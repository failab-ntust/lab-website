import React from 'react'
import Image from 'next/image'

import { Box, Typography, ListItem, ListItemAvatar, Tooltip, ListItemText, Avatar, Link, Stack } from '@mui/material'

import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

function About() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
            <Stack alignItems='center'>
                <Image
                    src='/chihchieh.jpeg'
                    alt='professor'
                    width={230}
                    height={300}
                />
            </Stack>
            <Stack justifyContent='space-around' ml={{ xs: 0, sm: 5 }}>
                <Typography variant="h5" sx={{ lineHeight: 'normal', fontWeight: 700 }}>
                    張智傑 Chih-Chieh Chang
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: 'normal', fontWeight: 600 }}>
                    國立台灣科技大學 管理學院 管理學士班 助理教授
                </Typography>
                <Box sx={{ bgcolor: '#F5F5F5', p: { xs: 2, md: 3 }, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                    <ListItem sx={{ bgcolor: 'white' }}>
                        <ListItemAvatar>
                            <Tooltip title="Email" placement="left">
                                <Avatar sx={{ bgcolor: 'primary' }} variant="rounded">
                                    <EmailIcon />
                                </Avatar>
                            </Tooltip>
                        </ListItemAvatar>
                        <ListItemText primary={
                            <Typography component={Link} variant="body1" color='secondary' href='mailto:ccchang@mail.ntust.edu.tw' sx={{ textDecoration: 'underline' }}>
                                ccchang@mail.ntust.edu.tw
                            </Typography>
                        } />
                    </ListItem>

                    <ListItem sx={{ bgcolor: 'white' }}>
                        <ListItemAvatar>
                            <Tooltip title="Office" placement="left">
                                <Avatar sx={{ bgcolor: 'primary' }} variant="rounded">
                                    <BusinessIcon />
                                </Avatar>
                            </Tooltip>
                        </ListItemAvatar>
                        <ListItemText primary={
                            <Typography variant="body1"  >
                                MA-205-4
                            </Typography>
                        } />
                    </ListItem>

                    <ListItem sx={{ bgcolor: 'white' }}>
                        <ListItemAvatar>
                            <Tooltip title="Phone" placement="left">
                                <Avatar sx={{ bgcolor: 'primary' }} variant="rounded">
                                    <SmartphoneIcon />
                                </Avatar>
                            </Tooltip>
                        </ListItemAvatar>
                        <ListItemText primary={
                            <Typography variant="body1" >
                                (+886) 927-376-598
                            </Typography>
                        } />
                    </ListItem>
                </Box>
            </Stack>
        </Box>
    )
}

export default About