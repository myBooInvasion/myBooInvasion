import React, { useState } from 'react';
import { Avatar, Box, Button, Grid, IconButton, MenuItem, Menu, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { ArrowDropDownRounded, List, MenuOpen } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/MenuRounded';

function Navbar(props) {
    const [targetEl, setTargetEl] = useState(null);
    const [open, setOpen] = useState(false);
    const ShowMenu = (element) => {
        setOpen(!open);
        setTargetEl(element.currentTarget);
    }

    return (
        <Grid container sx={{ mb: 4 }}>
            <Grid item xs sx={{ backgroundColor: 'white', py: 1, px: 2 }}>
                <IconButton size='large' sx={{ color: '#42C2FF', display: { xs: 'none', lg: 'inline-flex' } }} onClick={props.changeWidth}>
                    {props.sider ? <MenuOpen /> : <List />}
                </IconButton>
                <IconButton size='large' sx={{ color: '#42C2FF', display: { xs: 'inline-flex', lg: 'none' } }} onClick={props.toggleDrawer}>
                    <MenuIcon />
                </IconButton>
            </Grid>
            <Grid item xs sx={{ backgroundColor: 'white', py: 1 }}>
                <Stack direction='row' sx={{justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Avatar alt='nabila' src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'} sx={{ mx: 1 }} />
                    <IconButton size='small' color='secondary' onClick={ShowMenu}>
                        <ArrowDropDownRounded fontSize='large' />
                    </IconButton>
                    <Menu open={open} anchorEl={targetEl} onClose={ShowMenu} variant='selectedMenu'>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My Task</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                    <Button variant='outlined' size='small' sx={{textTransform: 'capitalize'}} href='https://1cak.com'>Login</Button>
                </Stack>
            </Grid>
            <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '4rem', backgroundColor: 'white', borderLeft: 2, borderColor: '#EDEDED' }}>
                <IconButton sx={{ color: '#42C2FF' }}>
                    <SettingsIcon />
                </IconButton>
            </Box>
        </Grid>
    );
}

export default Navbar;