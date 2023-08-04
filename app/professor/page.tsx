import * as React from 'react';
import { Box } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Unstable_Grid2';
import Information from './Information'


export default function Professor() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={4} sm={8} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src='/chihchieh.jpeg'
                        alt='professor'
                        width={230}
                        height={300}
                    />
                </Grid>
                <Grid xs={4} sm={8} md={12}>
                    <Box sx={{ height: '100%' }}>
                        <Information />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

