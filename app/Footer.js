'use client'
import { Stack, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-evenly' sx={{ bgcolor: '#FDD700', height: 80, width: '100%' }}>
            {/* <Stack direction='row' justifyContent='center' alignItems='center'>
                <Typography
                    variant="subtitle2"
                    component="div"
                    display="block"
                    color="text.secondary"
                >訪客人數：</Typography>
            </Stack> */}
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