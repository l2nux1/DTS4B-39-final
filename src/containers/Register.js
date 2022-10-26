import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

import { auth } from '../config/firebase';
import { Alert, Stack } from '@mui/material';

const Register = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const signUpWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
            }).catch((error) => {
                setErrorMessage(error.message);
            });
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    mt: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{
                    m: 1,
                    bgcolor: 'black',
                    height: 100,
                    width: 100,
                    mb: 4
                }}>
                    <Box
                        component="img"
                        sx={{
                            height: 60,
                            width: 60,
                        }}
                        alt="Logo"
                        src="logo-movie.jpg"
                    />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    {errorMessage ? <Alert severity='error'>{errorMessage}</Alert> : <></>}
                </Stack>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                {...register('email')}
                                error={errors.email ? true : false}
                            />
                            <Typography variant="inherit" color="red">
                                {errors.email?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                {...register('password')}
                                error={errors.password ? true : false}
                            />
                            <Typography variant="inherit" color="red">
                                {errors.password?.message}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Typography color='red'>{errorMessage}</Typography> */}
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Typography component="h5" align="center">
                        OR
                    </Typography>
                    <Button
                        onClick={signUpWithGoogle}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                        color="secondary"
                    >
                        <Avatar alt="Google" src="google.png" sx={{ width: 24, height: 24, mr: 1 }} /> Sign Up With Google
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Register;