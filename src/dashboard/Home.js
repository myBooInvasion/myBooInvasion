import React, { useState } from 'react';
import { Box, Drawer, Typography } from '@mui/material';
import Sider from './Sider';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


function Home() {
    const [sider, setSider] = useState(false);
    const [drawer, setDrawer] = useState(false);

    const ChangeWidth = () => {
        setSider(!sider);
    }

    const ToggleDrawer = () => {
        setDrawer(!drawer);
    }

    return (
        <Box component={'div'} sx={{ display: 'flex', backgroundColor: '#F7F7F7', width: '100%', minHeight: '100vh' }}>
            <Sider sider={sider} />
            <Drawer anchor='left' open={drawer} onClose={ToggleDrawer} sx={{display: {xs: 'flex', lg: 'none'}}}>
                <ContentDrawer />
            </Drawer>
            <Box component={'div'} sx={{ flexGrow: 1 }}>
                <Navbar sider={sider} toggleDrawer={ToggleDrawer} changeWidth={ChangeWidth} />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Home;

function ContentDrawer() {
    return (
        <Box component={'div'} sx={{minWidth: '10rem', backgroundColor: 'white'}}>
            <Link to={'/'}>Home</Link>
            <Link to={'/profile'}>Profile</Link>            
        </Box>
    );
}