import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { MobileDatePicker } from '@mui/lab';
import {DataSaverOnRounded, HighlightOffRounded} from '@mui/icons-material';


function Profile() {
  const linkImage = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';
  const [profilePicture, setProfilePicture] = useState(linkImage);
  const [job, setJob] = useState('');
  const [date, setDate] = useState(new Date());

  const ChangePicture = (element) => {
    if (element.target.files.length > 0) {
      let URLFiles = URL.createObjectURL(element.target.files[0]);
      setProfilePicture(URLFiles);
    }
  }

  const ChooseJob = (element) => {
    setJob(element.target.value);
  }

  const ChangeDate = (newValue) => {
    setDate(newValue)
  }

  return (
    // Buat Container
    <Container maxWidth={'xl'}>

      {/* Buat Grid antara TextField dan Card */}
      <Grid container columnSpacing={2} rowSpacing={2} sx={{ justifyContent: { xs: 'center', sm: 'start' } }}>

        {/* Tittle */}
        <Grid item xs={11} sx={{ maxWidth: { xs: 329, sm: '100%' } }}>
          <Typography variant='h6'>Edit profile</Typography>
        </Grid>

        {/* Atur Grid pada TextField */}
        <Grid order={{xs: 2, sm: 1}} item xs={11} sm={8} md={8} lg={9} sx={{ maxWidth: { xs: 329, sm: '100%' } }}>
          <Box component={'div'} sx={{ backgroundColor: 'white', overflow: 'hidden', p: 2, pr: { md: 0 }, borderRadius: 1 }}>
            <Grid item xs container rowSpacing={2} columnSpacing={{ md: 2 }}>

              {/* First Name */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label='Firstname' variant='outlined' color='secondary' size='small' />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth label='Lastname' variant='outlined' color='secondary' size='small' />
              </Grid>
              {/* Company */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth required label='Company' variant='outlined' color='secondary' size='small' />
              </Grid>
              {/* Job */}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size='small'>
                  <InputLabel id="demo-simple-select-label">Job</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={job}
                    label="Job"
                    onChange={ChooseJob}
                    >
                    {['Web dev', 'Mobile App dev', 'UI/UX Designer', 'Software Enginer'].map((item, id) => {
                      return (
                        <MenuItem key={id} value={id}>{item}</MenuItem>
                        );
                      })
                    }
                  </Select>
                </FormControl>
              </Grid>
              {/* Birthday */}
              <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <FormControl fullWidth size='small'>
                  <MobileDatePicker
                    label="Birthday"
                    value={date}
                    showTodayButton={true}
                    mask='__-__-____'
                    inputFormat='dd-MM-yyyy'
                    onChange={ChangeDate}
                    renderInput={(params) => <TextField {...params} size='small' required />}
                  />
                </FormControl>
              </LocalizationProvider>
              </Grid>
              {/* Gender */}
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size='small'>
                  <RadioGroup row defaultValue={'M'}>
                    <FormControlLabel value='F' control={<Radio />} label='Female' />
                    <FormControlLabel value='M' control={<Radio />} label='Male' />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* Age */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth required type={'number'} label='Age' size='small' inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}} />
              </Grid>
              {/* Weight */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth required type={'number'} label='Weight' size='small' inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}} />
              </Grid>
              {/* Address */}
              <Grid item xs={12}>
                <TextareaAutosize minRows={4} style={{width: '100%'}} />
              </Grid>
              {/* Address */}
              <Grid item xs={12} md={6}>
                <Stack spacing={2} direction='row'>
                  <Button variant='contained' startIcon={<DataSaverOnRounded />} color='primary' sx={{textTransform: 'capitalize'}}>save</Button>
                  <Button variant='contained' startIcon={<HighlightOffRounded />} color='warning' sx={{textTransform: 'capitalize'}}>cancel</Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Atur Grid pada Card */}
        <Grid order={{xs: 1, sm: 2}} item xs={11} sm={4} md={4} lg={3} sx={{ maxWidth: { xs: 329, sm: '100%' } }}>
          <Card>
            <CardContent>
              <CardMedia component='img' image={profilePicture} alt='John' sx={{ borderRadius: 1, maxHeight: 240 }} />
              <CardActions sx={{justifyContent: 'center'}}>
                <label htmlFor='change-profile-picture'>
                  <input id='change-profile-picture' type={'file'} accept='image/*' hidden onInput={ChangePicture} />
                  <Button variant='contained' sx={{ textTransform: 'capitalize' }} component={'span'}>
                    <Typography variant='caption'>Upload picture</Typography>
                  </Button>
                </label>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Container>
  );
}

export default Profile;