import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItem, Avatar, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InputBase from '@mui/material/InputBase';


const drawerWidth = 200;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
export default function MyDrawer({ children }) {

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ bgcolor: 'white' }}>
                    <IconButton onClick={() => setOpen(!open)} sx={{ mr: 2 }}>
                        <Menu color='primary' />
                    </IconButton>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <img src='/Logo.svg' style={{ marginLeft: 12, height: 45, width: 100 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <Search />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, width: 250 }}
                                    placeholder="Search Google Maps"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                            </Box>
                            <NotificationsNoneIcon sx={{ color: 'blue', mt: 1, mr: 2 }} />
                            <Box sx={{ bgcolor: '#F3F3F3', borderRadius: 2 }}>
                                <Typography variant='body1' sx={{ color: 'black', p: 1 }}>
                                    Organization name
                                </Typography></Box>
                            <Avatar alt="Remy Sharp" src="/Ellipse_36.svg" />
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto',display:'flex',flexDirection:'column' ,py:2,justifyContent:'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3, mt: 1 }}>
                        <img src='/Dashboard_unselected.svg' />
                        <Typography variant='body2' sx={{ ml: 2, color: 'black' }} >
                            Dashboard
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex', flexDirection: 'row', ml: 2, mt: 2, mr: 2, p:0.5,
                        background: '#3C50E0',
                        boxShadow: '2px 4px 11px rgba(60, 80, 224, 0.25)',
                        borderRadius: '7px'
                    }}>
                        <img src='/Manage_projects_unselected.svg' />
                        <Typography variant='body2' sx={{ ml: 2, pr: 2, color: 'black' }}>
                            Manage Projects
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3, mt: 2 }}>
                        <img src='/User_acces_unselected.svg' />
                        <Typography variant='body2' sx={{ ml: 2, color: 'black' }}>
                            User Access
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3, mt: 2 }}>
                        <img src='/Al_lchats_unselected.svg' />
                        <Typography variant='body2' sx={{ ml: 2, color: 'black' }}>
                            All Chats
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
            <Main open={open}>
                <Toolbar />
                {children}
            </Main>
        </Box>
    );
}
