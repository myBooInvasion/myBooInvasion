import React from 'react';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { GroupRounded, HourglassTopRounded, SchoolRounded, SmsFailedRounded } from '@mui/icons-material';

function Overview() {
    return (
        <Container maxWidth={'lg'}>
            <Typography variant='h6' fontWeight='bold' sx={{ mb: 1 }}>Register Information</Typography>
            <Grid container columnSpacing={2} rowSpacing={{ xs: 2, md: 1 }} sx={{ justifyContent: { xs: 'center', sm: 'start' } }}>
                <CardView color='primary' count={100} caption='Total Participant'>
                    <GroupRounded />
                </CardView>
                <CardView color='success' count={80} caption='Accepted'>
                    <SchoolRounded />
                </CardView>
                <CardView color='error' count={10} caption='Rejected'>
                    <SmsFailedRounded />
                </CardView>
                <CardView color='warning' count={10} caption='Pending'>
                    <HourglassTopRounded />
                </CardView>
            </Grid>
        </Container>
    );
}

export default Overview;

function CardView(props) {
    return (
        <Grid item xs={6} sm={4} md={3}>
            <Box component={'div'} sx={{ minHeight: '13rem', backgroundColor: 'white', textAlign: 'center', borderRadius: 2, p: 2 }}>
                <IconButton size='large' color={props.color} sx={{ backgroundColor: '#F7F7F7' }}>
                    {props.children}
                </IconButton>
                <Typography variant='h3' fontWeight='bold' sx={{ fontFamily: 'Roboto', color: '#151D3B', mt: 1 }}>{props.count}</Typography>
                <Typography variant='subtitle1' fontWeight='bold' color={'#BBBBBB'}>{props.caption}</Typography>
            </Box>
        </Grid>
    );
}