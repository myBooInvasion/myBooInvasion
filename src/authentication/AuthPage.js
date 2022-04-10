import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Container, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { AccountCircleOutlined, AttachEmailOutlined, VpnKeyOutlined } from '@mui/icons-material';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

function AuthPage() {
    const myContext = useContext(UserContext);
    const navigate = useNavigate();

    // Change Tabs Login/Register
    const [sign, setSign] = useState(false);

    // Login Data
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    // Register Data
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Handle Change data Login/Register
    const handleChange = (property, value) => {
        if (sign) {
            setRegisterData(
                Object.defineProperty(registerData, property, {value: value})
            );
        } else {
            setLoginData(
                Object.defineProperty(loginData, property, {value: value})
            );
        }
    }

    // HandleSubmit
    async function handleSubmit() {
        await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(loginData),
        })
        .then(result => result.json())
        .then(json => {
            if (json.status_code === 202) {
                myContext.update({type: 'SET_LOGIN'});
                navigate('/', {replace: true});
            } else {
                console.log(json.detail);
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if (myContext.state.isLogin) {
            navigate('/', {replace: true})
        }
    })

    return (
        <Container maxWidth={'xs'} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Box sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2, flexGrow: 1, py: 3, px: 6 }}>
                {sign?
                <RegisterView changeData={handleChange} />:
                <LoginView changeData={handleChange} submitData={handleSubmit} />}
                <Button sx={{ mt: 4 }} onClick={() => setSign(!sign)}>{sign? 'Login':'Register'}</Button>
            </Box>
        </Container>
    );
}

export default AuthPage;

const LoginView = (props) => {
    return (
        <Stack component={'form'} spacing={4}>
            <Typography className='title-login' variant='h5' fontWeight='bold' textAlign='center'>Login</Typography>
            <TextField id='username' className='email-login' required variant='standard' color='primary' size='medium' placeholder='Username'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <AttachEmailOutlined color='primary' fontSize='medium' />
                        </InputAdornment>
                    )
                }} onChange={e => props.changeData(e.target.id, e.target.value)} />
            <TextField id='password' className='pass-login' required type={'password'} variant='standard' color='primary' size='medium' placeholder='Password'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <VpnKeyOutlined color='primary' fontSize='medium' />
                        </InputAdornment>
                    )
                }} onChange={e => props.changeData(e.target.id, e.target.value)} />
            <Button variant='contained' color='primary' size='large' onClick={() => props.submitData()}>Login</Button>
        </Stack>
    );
}

const RegisterView = (props) => {
    return (
        <Stack component={'form'} spacing={4}>
            <Typography className='title-register' variant='h5' fontWeight='bold' textAlign='center'>Register</Typography>
            <TextField id='username' className='user-register' required variant='standard' color='primary' size='medium' placeholder='Username'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <AccountCircleOutlined color='primary' fontSize='medium' />
                        </InputAdornment>
                    )
                }} onChange={e => props.changeData(e.target.id, e.target.value)} />
            <TextField id='email' className='email-register' required type={'email'} variant='standard' color='primary' size='medium' placeholder='Email'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <AttachEmailOutlined color='primary' fontSize='medium' />
                        </InputAdornment>
                    )
                }} onChange={e => props.changeData(e.target.id, e.target.value)} />
            <TextField id='password' className='pass-register' required type={'password'} variant='standard' color='primary' size='medium' placeholder='Password'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <VpnKeyOutlined color='primary' fontSize='medium' />
                        </InputAdornment>
                    )
                }} onChange={e => props.changeData(e.target.id, e.target.value)} />
            <Button variant='contained' color='primary' size='large'>Register</Button>
        </Stack>
    );
}