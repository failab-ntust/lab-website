'use client'
import { Stack, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-evenly' sx={{ bgcolor: '#FDD700', height: 80 }}>
            <Stack direction='row' justifyContent='center' alignItems='center'>
                <Typography
                    variant="subtitle2"
                    component="div"
                    display="block"
                    color="text.secondary"
                >訪客人數：</Typography>
                <img width="100" height="20" border="0" src="http://counter.i2yes.com/counter.php?p=lab-website-khaki.vercel.app_ccchang&amp;v=lab-website-khaki.vercel.app&amp;d=6&amp;r=1&amp;t=font158&amp;n=0" alt="FREE Counter / i2yes.com" />
            </Stack>
            <Stack direction='column' justifyContent='center' alignItems='center'>
                <Typography
                    variant="subtitle2"
                    component="div"
                    // gutterBottom
                    display="block"
                    color="text.secondary"
                >
                    © Copyright <b>FAILab</b>. All Rights Reserved
                </Typography>
                <Typography
                    variant="subtitle2"
                    component="div"
                    // gutterBottom
                    display="block"
                    color="text.secondary"
                >
                    Built by FAILab
                </Typography>
            </Stack>
        </Stack >
    )
}