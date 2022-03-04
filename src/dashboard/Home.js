import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sider from './Sider';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


function Home() {
    const [sider, setSider] = useState(false);

    const ChangeWidth = () => {
        setSider(!sider);
    }

    return (
        <Box component={'div'} sx={{ display: 'flex', backgroundColor: '#F7F7F7', width: '100%', minHeight: '100vh' }}>
            <Sider sider={sider} />
            <Box component={'div'} sx={{ flexGrow: 1 }}>
                <Navbar sider={sider} changeWidth={ChangeWidth} />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Home;