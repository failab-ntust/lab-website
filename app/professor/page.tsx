'use client'
import * as React from 'react';

import { Box, Grid } from '@mui/material'

import About from './About'
import Information from './Information'
import PageTitle from '../PageTitle'

export default function Professor() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <PageTitle title='指導教授' />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid size={{ xs: 4, sm: 8, md: 12 }} >
                    <About />
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 12 }} >
                    <Information />
                </Grid>
            </Grid>
        </Box>
    );
}

