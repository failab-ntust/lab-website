'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#fddf33',
            main: '#FDD700',
            dark: '#b19600',
        },
        secondary: {
            light: '#4383cc',
            main: '#1565C0',
            dark: '#0e4686'
        },
        grey: {
            light: '#b1b1b1',
            main: '#9e9e9e',
            dark: '#6e6e6e'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1800,
        },
    },
});