import React from 'react'
import Image from 'next/image'

import { Box, Typography, ListItem, ListItemAvatar, Tooltip, ListItemText, Avatar, Link, Stack } from '@mui/material'

import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

function About() {
    return (
        <Stack justifyContent='space-evenly' flexDirection={{ xs: 'column', md: 'row' }} sx={{ bgcolor: '#F5F5F5', borderRadius: 5 }} spacing={2}>
            <Stack alignItems='center'>
                <Image
                    src='/chihchieh-removebg.png'
                    alt='professor'
                    width={230}
                    height={300}
                />
            </Stack>
            <Stack justifyContent='space-evenly' alignItems='center' >
                <Typography variant="h5" sx={{ lineHeight: 'normal', fontWeight: 700 }}>
                    張智傑 Chih-Chieh Chang
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: 'normal', fontWeight: 600 }}>
                    台灣科技大學 管理學士班 助理教授
                </Typography>
                <Box sx={{ bgcolor: { sm: 'white' }, p: 1.5 }}>
                    <ListItem disableGutters>
                        <ListItemAvatar>
                            <Tooltip title="Email" placement="left">
                                <Avatar sx={{ bgcolor: 'primary' }} variant="circular">
                                    <EmailIcon />
                                </Avatar>
                            </Tooltip>
                        </ListItemAvatar>
                        <ListItemText primary={
                            <Stack direction="row">
                                <Typography variant="body1" >
                                    Mail：
                                </Typography>
                                <Typography component={Link} variant="body1" color='secondary' href='mailto:ccchang@mail.ntust.edu.tw' sx={{ textDecoration: 'underline' }}>
                                    ccchang@mail.ntust.edu.tw
                                </Typography>
                            </Stack>
                        } />
                    </ListItem>

                    <ListItem disableGutters>
                        <ListItemAvatar>
                            <Tooltip title="Office" placement="left">
                                <Avatar sx={{ bgcolor: 'primary' }} variant="circular">
                                    <BusinessIcon />
                                </Avatar>
                            </Tooltip>
                        </ListItemAvatar>
                        <ListItemText primary={
                            <Typography variant="body1">
                                Office： MA-205-4
                            </Typography>
                        } />
                    </ListItem>

                    <ListItem disableGutters>
                        <ListItemAvatar>
                            <Tooltip title="Phone" placement="left">
                                <Avatar sx={{ bgcolor: 'primary' }} variant="circular">
                                    <SmartphoneIcon />
                                </Avatar>
                            </Tooltip>
                        </ListItemAvatar>
                        <ListItemText primary={
                            <Typography variant="body1" >
                                Phone：(+886) 927-376-598
                            </Typography>
                        } />
                    </ListItem>
                </Box>
            </Stack>
        </Stack>
    )
}

export default About