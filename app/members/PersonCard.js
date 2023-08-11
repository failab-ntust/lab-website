import * as React from 'react';
import { Stack, ListItemText, Typography, Avatar } from '@mui/material'

export default function PersonCard({ name, imgSrc, description }) {
    return (
        <Stack sx={{ border: '1px solid #CCCCCC' }}
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={3}
        >
            <Avatar
                alt="profile"
                variant="square"
                src={imgSrc ? `/members/${imgSrc}.jpg` : '/avatar.png'}
                sx={{ width: 100, height: 100 }}
            />
            <ListItemText
                primary={name}
                secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                    >
                        {description}
                    </Typography>
                }
            />
        </Stack>
    );
}


