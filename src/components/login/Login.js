import React, { useState } from 'react'
import { Box, Button,Container, Grid, Paper, TextField, Typography } from '@mui/material'
import logoUdeA from '../../assets/logos/logosimbolo-horizontal-png.png';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
    
        // Validaciones básicas
        if (!email || !password) {
          setErrorMessage('Por favor, complete todos los campos');
        } else if (password.length < 6) {
          setErrorMessage('La contraseña debe tener al menos 6 caracteres');
        } else {
          setErrorMessage('');
          // Aquí puedes enviar los datos de inicio de sesión al servidor
        }
    };

    return (
        <Container maxWidth='xl'>
            <Grid
                container direction={'row'} 
                alignItems={'center'} 
                justifyContent={'center'}
                sx={{minHeight:'100vh'}}
            >
                <Grid 
                    item xs={6}
                    
                >
                        <img src={logoUdeA} height={'100%'} width={'100%'}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{padding:'1.2em', borderRadius:'0.5em'}}>
                        <Typography 
                            variant='h6'
                            sx={{mt:1,mb:1}}
                        >
                            Iniciar Sesión
                        </Typography>
                        <Box component = 'form' onSubmit={handleSubmit}>
                            <TextField
                                name='username'
                                fullWidth 
                                label='Email'
                                sx={{mt:2,mb:1.5}}
                                required
                                margin='normal'
                                type='text'
                                onChange={handleEmailChange}
                                
                            />
                            <TextField 
                                name='password'
                                fullWidth 
                                label='Contraseña'
                                sx={{mt:2,mb:1.5}}
                                required
                                margin='normal'
                                type='password'
                                onChange={handlePasswordChange}
                            />
                            <Button 
                                type='submit' 
                                fullWidth
                                variant='contained'
                                sx={{mt:2,mb:3}}
                            >
                                Iniciar Sesión
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
