'use client'
import { Box, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#FDD700', height: 90, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography
                variant="subtitle2"
                component="div"
                gutterBottom
                display="block"
                color="text.secondary"
            >
                © Copyright <b>FAILab</b>. All Rights Reserved
            </Typography>
            <Typography
                variant="subtitle2"
                component="div"
                gutterBottom
                display="block"
                color="text.secondary"
            >
                Built by FAILab
            </Typography>
        </Box>
    )
}