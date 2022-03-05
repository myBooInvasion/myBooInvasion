import React, {useState} from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';

function Profile() {
  const [pictureURL, setPictureURL] = useState('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80');

  const CheckFile = (element) => {
    if (element.target.files.length > 0) {
      const source = URL.createObjectURL(element.target.files[0]);
      setPictureURL(source);
    }
  }

  return (
    <Container maxWidth={'lg'}>
      <Typography variant='h6' fontWeight={'bold'}>Edit Profile</Typography>
      <Grid container component={'form'} columnSpacing={2} rowSpacing={{xs: 2}} sx={{justifyContent: {xs: 'center', sm: 'start'}}}>
        <Grid item xs={12} sm={7} md={8} sx={{maxWidth: {xs: 359, sm: '100%'}}}>
          <Box component={'div'} sx={{ backgroundColor: 'white', borderRadius: 1, p: 2 }}>
            <TextField fullWidth label='Username' variant='outlined' color='secondary' size='small' />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} md={4} sx={{maxWidth: {xs: 359, sm: '100%'}}}>
          <Card sx={{ boxShadow: 'none' }}>
            <CardContent>
              <CardMedia component='img' image={pictureURL} sx={{borderRadius: 2, height: 280}} />
              <CardActions sx={{px: 0, pt: 3}}>
                <Button component='label' htmlFor='change-picture-profile' variant="contained" sx={{textTransform: 'capitalize'}}>Change Picure</Button>
                <input id='change-picture-profile' type={'file'} accept='.jpg, .png' hidden onInput={CheckFile} />
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;