import React from 'react';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { GroupRounded, HourglassTopRounded, SchoolRounded, SmsFailedRounded } from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

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
            <Grid container sx={{mt: 3}}>
                <Grid item xs>
                    <Box component={'div'} sx={{width: '99%', backgroundColor: 'white', borderRadius: 2, mx: 'auto'}}>
                    <Line
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'This is Chart.js',
                            },
                            legend: {
                                display: true,
                                position: 'top',
                            },
                        },
                        layout: {
                            padding: 16,
                        },
                        scales: {
                            yAxis: {
                                min: 0,
                                max: 30,
                                ticks: {
                                    backdropColor: 'green',
                                }
                            }
                        }
                    }}
                    data={{
                        labels: ['January', 'February', 'Maret', 'Mei', 'Juny', 'July'],
                        datasets: [
                            {
                                label: 'Feri',
                                data: [20, 5, 8, 10, 3, 13],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(255, 205, 86, 0.2)',
                                ],
                                fill: true,
                                tension: 0.2,
                            },
                            {
                                label: 'Yanto',
                                data: [10, 8, 15, 7, 3, 5],
                                backgroundColor: [
                                    'rgba(255, 99, 100, 0.2)',
                                    'rgba(255, 159, 60, 0.2)',
                                    'rgba(255, 205, 80, 0.2)',
                                ],
                                fill: true,
                                tension: 0.2,
                            }
                        ]
                    }} />
                    </Box>
                </Grid>
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