"use client";
import * as React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { AppBar, Box, Toolbar, IconButton, Typography, Container, SwipeableDrawer, ListItemButton, ListItemIcon, Tabs, Tab, Stack } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PeopleIcon from '@mui/icons-material/People';

const pages = [
    { item: '指導教授', href: '/professor', icon: <PersonIcon /> },
    { item: '研究領域', href: '/research', icon: <MenuBookIcon /> },
    { item: '研究成果', href: '/result', icon: <ReceiptLongIcon /> },
    { item: '研究成員', href: '/members', icon: <PeopleIcon /> }
];
const display = {
    Above900px: { xs: 'none', md: 'flex' },
    Below900px: { xs: 'flex', md: 'none' }
}
const LogoName = ({ flexGrow, variant, xs, md, letterSpacing }) => (
    <Box sx={{ display: { xs: xs, md: md }, flexGrow: flexGrow }}>
        <Typography
            variant={variant}
            noWrap
            component="a"
            href="/"
            sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: letterSpacing,
                color: '#000000',
                textDecoration: 'none'
            }}
        >
            FAILAB
        </Typography>
    </Box>
)

const CusToolbar = ({ display, children }) => (
    <Toolbar disableGutters sx={{ display: display }}>
        <Image src='/coin.png' width={35} height={35} alt='logo' style={{ marginRight: 10 }} />
        {children}
    </Toolbar>
)

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const pathname = usePathname()

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: "#FFFFFF" }}>
            <Container maxWidth="xl">
                {/* above 900px*/}
                <CusToolbar display={display.Above900px}>
                    <LogoName {...{ variant: 'h4', xs: 'none', md: 'flex', flexGrow: 0, letterSpacing: '.3rem' }} />

                    <Box sx={{ flexGrow: 1, display: display.Above900px, justifyContent: 'flex-end' }}>
                        <Tabs value={false}>
                            {pages.map((page, index) => (
                                <Tab
                                    key={index}
                                    disableRipple
                                    disableFocusRipple
                                    sx={{ opacity: 1 }}
                                    label={
                                        <Typography
                                            variant="body1"
                                            noWrap
                                            component="a"
                                            href={page.href}
                                            sx={{
                                                color: pathname === page.href ? (theme) => theme.palette.secondary.main : '#000000',
                                                textDecoration: 'none',
                                                fontWeight: 600
                                            }}>
                                            {page.item}
                                        </Typography>}
                                />
                            ))}
                        </Tabs>
                    </Box>
                </CusToolbar>

                {/* below 900px*/}
                <CusToolbar display={display.Below900px}>
                    <LogoName {...{ variant: 'h5', xs: 'flex', md: 'none', flexGrow: 1, letterSpacing: '.1rem' }} />

                    <Box sx={{ display: display.Below900px }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: "#FFD700" }} />
                        </IconButton>

                        <SwipeableDrawer
                            anchor='top'
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            onOpen={handleOpenNavMenu}
                        >
                            {pages.map((page, index) => (
                                <ListItemButton
                                    divider
                                    selected={pathname === page.href}
                                    key={index}
                                    component="a"
                                    href={page.href}
                                    sx={{
                                        color: '#000000',
                                        textDecoration: 'none',
                                        justifyContent: 'center'
                                    }}
                                >

                                    <Stack direction='row' justifyContent='center' py={0.5}>
                                        <ListItemIcon>
                                            {page.icon}
                                        </ListItemIcon>
                                        {page.item}
                                    </Stack>
                                </ListItemButton>

                            ))}
                        </SwipeableDrawer>

                    </Box>
                </CusToolbar>
            </Container>
        </AppBar >
    );
}
export default NavBar;
