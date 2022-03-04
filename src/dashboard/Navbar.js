import React from 'react';
import { Avatar, Box, Grid, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { List, MenuOpen, Menu } from '@mui/icons-material';

function Navbar(props) {
    return (
        <Grid container sx={{mb: 4}}>
            <Grid item xs sx={{ backgroundColor: 'white', py: 1, px: 2 }}>
                <IconButton size='large' sx={{ color: '#42C2FF', display: {xs: 'none', lg: 'inline-flex'} }} onClick={props.changeWidth}>
                    {props.sider ? <MenuOpen /> : <List />}
                </IconButton>
                <IconButton size='large' sx={{ color: '#42C2FF', display: {xs: 'inline-flex', lg: 'none'} }}>
                    <Menu />
                </IconButton>
            </Grid>
            <Grid item xs sx={{ backgroundColor: 'white', py: 1 }}>
                <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <Avatar alt='nabila' src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'} sx={{ mx: 1 }} />
                    <Avatar alt='nabila' src={'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'} sx={{ mx: 1 }} />
                </Box>
            </Grid>
            <IconButton sx={{ width: '4rem', backgroundColor: 'white', borderLeft: 2, borderColor: '#EDEDED', borderRadius: 0, color: '#42C2FF' }}>
                <SettingsIcon />
            </IconButton>
        </Grid>
    );
}

export default Navbar;