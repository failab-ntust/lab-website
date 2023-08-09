import React from 'react'
import { Typography, Divider, Stack } from '@mui/material'

function FieldTitle({ fieldtitle }) {
    return (
        <Stack mb={2}>
            <Divider textAlign="center">
                <Typography variant='h5' sx={{ color: (theme) => theme.palette.secondary.main, fontWeight: 700 }}>
                    {fieldtitle}
                </Typography>
            </Divider>
        </Stack>
    )
}

export default FieldTitle