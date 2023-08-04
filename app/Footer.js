'use client'
import { Box, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box sx={{ width: '100%', bgcolor: '#FDD700', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 3 }}>
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