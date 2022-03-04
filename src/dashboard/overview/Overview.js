import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import {GroupRounded, HourglassTopRounded, SchoolRounded, SmsFailedRounded} from '@mui/icons-material';
import React from 'react';

function Overview() {
    return (
        <Container maxWidth={'lg'}>
            <Typography variant='h6' fontWeight='bold' sx={{mb: 1}}>Register Information</Typography>
            <Grid container columnSpacing={2} rowSpacing={{xs: 2, md: 1}} sx={{justifyContent: {xs: 'center', sm: 'start'}}}>
                <Grid item xs={6} sm={4} md={3}>
                    <Box component={'div'} sx={{ minHeight: '13rem', backgroundColor: 'white', textAlign: 'center', borderRadius: 2, p: 2 }}>
                        <IconButton size='large' color='primary' sx={{backgroundColor: '#F7F7F7'}}>
                            <GroupRounded />
                        </IconButton>
                        <Typography variant='h3' fontWeight='bold' sx={{fontFamily: 'Roboto', color: '#151D3B'}}>100</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Box component={'div'} sx={{ minHeight: '13rem', backgroundColor: 'white', textAlign: 'center', borderRadius: 2, p: 2 }}>
                        <IconButton size='large' color='success' sx={{backgroundColor: '#F7F7F7'}}>
                            <SchoolRounded />
                        </IconButton>
                        <Typography variant='h3' fontWeight='bold' sx={{fontFamily: 'Roboto', color: '#151D3B'}}>80</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Box component={'div'} sx={{ minHeight: '13rem', backgroundColor: 'white', textAlign: 'center', borderRadius: 2, p: 2 }}>
                        <IconButton size='large' color='error' sx={{backgroundColor: '#F7F7F7'}}>
                            <SmsFailedRounded />
                        </IconButton>
                        <Typography variant='h3' fontWeight='bold' sx={{fontFamily: 'Roboto', color: '#151D3B'}}>10</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Box component={'div'} sx={{ minHeight: '13rem', backgroundColor: 'white', textAlign: 'center', borderRadius: 2, p: 2 }}>
                        <IconButton size='large' color='warning' sx={{backgroundColor: '#F7F7F7'}}>
                            <HourglassTopRounded />
                        </IconButton>
                        <Typography variant='h3' fontWeight='bold' sx={{fontFamily: 'Roboto', color: '#151D3B'}}>10</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Overview;