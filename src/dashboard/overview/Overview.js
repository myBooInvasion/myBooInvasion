import React from 'react';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { GroupRounded, HourglassTopRounded, SchoolRounded, SmsFailedRounded } from '@mui/icons-material';

function Overview() {
    return (
        <Container maxWidth={'xl'}>
            <Grid container columnSpacing={2} rowSpacing={{ xs: 2 }} sx={{ justifyContent: { xs: 'center', sm: 'start' } }}>
                <Grid item xs={12}>
                    <Typography variant='h6'>Register Information</Typography>
                </Grid>
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
                <Box component={'div'} sx={{ display: 'inline-block', backgroundColor: '#F7F7F7', borderRadius: '50%' }}>
                    <IconButton size='large' color={props.color}>
                        {props.children}
                    </IconButton>
                </Box>
                <Typography variant='h3' fontWeight='bold' sx={{ fontFamily: 'Roboto', color: '#151D3B', mt: 1 }}>{props.count}</Typography>
                <Typography variant='subtitle1' fontWeight='bold' color={'#BBBBBB'}>{props.caption}</Typography>
            </Box>
        </Grid>
    );
}