import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { AccountCircleRounded, DashboardRounded } from '@mui/icons-material';
import './Dashboard.css';
import logoReact from '../logo.svg';

function Sider(props) {
    return (
        <Box component={'div'}
            sx={{ height: '100vh', backgroundColor: 'white', px: 1, borderRight: 2, borderColor: '#EDEDED', position: 'fixed', left: 0, top: 0, display: { xs: 'none', lg: 'block' } }}>

            <List>
                <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                        <img src={logoReact} alt='brand' style={{ width: '3.5rem' }} />
                    </ListItemIcon>
                    <ListItemText primary='React' primaryTypographyProps={{ fontWeight: 600, fontSize: '1.2rem', color: '#42C2FF' }}
                        sx={{ maxWidth: props.sider ? '10rem' : 0, opacity: props.sider ? 1 : 0, transition: 'all .3s ease-in' }} />
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding sx={{ my: 1 }}>
                    <NavLink to={'/'} className='menus' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <>
                                <ListItemIcon sx={{ minWidth: 'auto' }}>
                                    <DashboardRounded sx={{ color: isActive ? 'white' : '#42C2FF' }} />
                                </ListItemIcon>
                                <ListItemText primary='Dashboard' primaryTypographyProps={{ fontWeight: 600, lineHeight: 0, color: isActive ? 'white' : '#42C2FF' }}
                                    sx={{ maxWidth: props.sider ? '10rem' : 0, opacity: props.sider ? 1 : 0, transition: 'all .3s ease-in', pl: props.sider ? 2 : 0 }} />
                            </>
                        )}
                    </NavLink>
                </ListItem>
                <ListItem disablePadding sx={{ my: 1 }}>
                    <NavLink to={'/profile'} className='menus' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        {({ isActive }) => (
                            <>
                                <ListItemIcon sx={{ minWidth: 'auto' }}>
                                    <AccountCircleRounded sx={{ color: isActive ? 'white' : '#42C2FF' }} />
                                </ListItemIcon>
                                <ListItemText primary='Profile' primaryTypographyProps={{ fontWeight: 600, lineHeight: 0, color: isActive ? 'white' : '#42C2FF' }}
                                    sx={{ maxWidth: props.sider ? '10rem' : 0, opacity: props.sider ? 1 : 0, transition: 'all .3s ease-in', pl: props.sider ? 2 : 0 }} />
                            </>
                        )}
                    </NavLink>
                </ListItem>
            </List>

        </Box>
    );
}

export default Sider;