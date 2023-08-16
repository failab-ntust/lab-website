'use client';
import React from 'react'
import { Box, Grid } from '@mui/material'
import Card from './Card'
import PageTitle from '../PageTitle';

function Competition_result() {
    return (
        <Box>
            <PageTitle title='競賽成果' />
            <Grid container spacing={{ xs: 3, sm: 3, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12, lg: 15 }}>
                <Grid item xs={4} sm={4} md={4} lg={5}>
                    <Card />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={5}>
                    <Card />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={5}>
                    <Card />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={5}>
                    <Card />
                </Grid>
                <Grid item xs={4} sm={4} md={6} lg={5}>
                    <Card />
                </Grid>
            </Grid>

        </Box>
    )
}

export default Competition_result