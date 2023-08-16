import React from 'react'
import { Box, Typography, ListItem } from '@mui/material';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

function SubTitle({ title, children }) {
    return (
        <>
            <ListItem disableGutters>
                <ViewStreamIcon fontSize="large" color='secondary' sx={{ mr: 1 }} />
                <Typography variant="h5" noWrap sx={{ lineHeight: 'normal', fontWeight: 700 }}>
                    {title}
                </Typography>
            </ListItem>
            <Box sx={{ bgcolor: '#F5F5F5', borderRadius: 5, p: { xs: 2, md: 3 }, mb: 4 }}>
                {children}
            </Box>
        </>
    )
}

export default SubTitle