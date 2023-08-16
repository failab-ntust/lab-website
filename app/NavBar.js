"use client";
import * as React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { AppBar, Box, Toolbar, IconButton, Typography, Container, SwipeableDrawer, ListItemButton, ListItemIcon, Stack, Menu, MenuItem, Button, Collapse, ListItemText, List } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import ScienceIcon from '@mui/icons-material/Science';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupsIcon from '@mui/icons-material/Groups';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const pages = [
    { item: '指導教授', href: '/professor', icon: <PersonIcon /> },
    { item: '研究領域', href: '/research', icon: <MenuBookIcon /> },
    { item: '業界機會', href: '/opportunity', icon: <WorkIcon /> },
    {
        item: '實驗室成果', subitem: [
            { item: '研究成果', href: '/research_result', icon: <ReceiptLongIcon /> },
            { item: '競賽成果', href: '/competition_result', icon: <Diversity3Icon /> }], icon: <ScienceIcon />
    },
    { item: '實驗室成員', href: '/members', icon: <GroupsIcon /> }
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(true);

    const open = Boolean(anchorEl);

    const pathname = usePathname()

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleDrawerClick = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="fixed" elevation={0} sx={{ bgcolor: "#FFFFFF" }}>
            <Container maxWidth="xl">
                {/* above 900px*/}
                <CusToolbar display={display.Above900px}>
                    <LogoName {...{ variant: 'h4', xs: 'none', md: 'flex', flexGrow: 0, letterSpacing: '.3rem' }} />

                    <Stack direction='row' spacing={1} sx={{ flexGrow: 1, display: display.Above900px, justifyContent: 'flex-end' }}>
                        {pages.map((page, index) => (
                            <Box key={index} sx={{ justifyContent: 'center' }}>
                                <Button
                                    variant="text"
                                    color="secondary"
                                    href={page.href}
                                    aria-expanded={page.subitem ? 'true' : undefined}
                                    onClick={page.subitem && handleOpen}
                                    size="large"
                                    disableRipple
                                    endIcon={page.subitem && <KeyboardArrowDownIcon />}
                                    sx={{
                                        color: pathname === page.href ? (theme) => theme.palette.secondary.main : '#000000',
                                        fontWeight: 600
                                    }}>
                                    {page.item}
                                </Button>
                                {
                                    page.subitem &&
                                    <Menu
                                        key={index}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        {page.subitem.map((subitem, index) => (
                                            <MenuItem
                                                key={index}
                                                component="a"
                                                href={subitem.href}
                                                selected={pathname === subitem.href}
                                            >
                                                {subitem.item}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                }
                            </Box>
                        ))}
                    </Stack>
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
                            <MenuIcon color='secondary' />
                        </IconButton>

                        <SwipeableDrawer
                            anchor='top'
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            onOpen={handleOpenNavMenu}
                        >
                            {pages.map((page, index) => (
                                <Box key={index}>
                                    <ListItemButton
                                        divider
                                        selected={pathname === page.href}
                                        href={page.href}
                                        sx={{ justifyContent: 'center' }}
                                        onClick={page.subitem && handleDrawerClick}
                                    >
                                        <Stack direction='row' alignItems='center'>
                                            <ListItemIcon sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                                {page.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={page.item} />
                                            {page.subitem &&
                                                (drawerOpen ? <ExpandLess /> : <ExpandMore />)
                                            }
                                        </Stack>
                                    </ListItemButton>

                                    {page.subitem &&
                                        <Collapse in={drawerOpen} timeout="auto" unmountOnExit>
                                            {page.subitem.map((subitem, index) => (
                                                <ListItemButton key={index}
                                                    selected={pathname === subitem.href}
                                                    href={subitem.href}
                                                    sx={{ justifyContent: 'center' }}
                                                >
                                                    <Stack direction='row'>
                                                        <ListItemIcon sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            {subitem.icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={subitem.item} />
                                                    </Stack>
                                                </ListItemButton>
                                            ))}
                                        </Collapse>
                                    }
                                </Box>
                            ))}
                        </SwipeableDrawer>

                    </Box>
                </CusToolbar>
            </Container>
        </AppBar >
    );
}
export default NavBar;
