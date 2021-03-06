import React, { useContext, useState, useEffect } from 'react';
import { Box, Drawer } from '@mui/material';
import Sider from './Sider';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import UserContext from '../UserContext';


function Home() {
    // Get context value
    const myContext = useContext(UserContext);

    // Navigate page
    const navigate = useNavigate();

    const [sider, setSider] = useState(false);
    const [drawer, setDrawer] = useState(false);

    const ChangeWidth = () => {
        setSider(!sider);
    }
    const ToggleDrawer = () => {
        setDrawer(!drawer);
    }

    useEffect(() => {
        if (!myContext.state.isLogin) {
            navigate('/auth', {replace: true});
        }
    })

    return (
        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '#F7F7F7', width: '100%', minHeight: '100vh' }}>
            <Sider sider={sider} />
            <Drawer anchor='left' open={drawer} onClose={ToggleDrawer} sx={{display: {xs: 'flex', lg: 'none'}}}>
                <ContentDrawer />
            </Drawer>
            <Box component={'div'} sx={{ width: {xs: '100%', lg: sider? 'calc(100% - 168px)':'calc(100% - 68px)'}, transition: 'all .25s ease-in' }}>
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