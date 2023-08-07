import * as React from 'react';

import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';

import About from './About'
import Information from './Information'


export default function Professor() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={4} sm={8} md={12}>
                    <About />
                </Grid>
                <Grid xs={4} sm={8} md={12}>
                    <Information />
                </Grid>
            </Grid>
        </Box>
    );
}

