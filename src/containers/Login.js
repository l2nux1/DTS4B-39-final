import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../config/firebase';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Alert } from '@mui/material';
import { Stack } from '@mui/system';

import useUserStore, { selectSetLoggedUser } from '../store/user';

const Login = () => {
    const setLoggedUser = useUserStore(selectSetLoggedUser);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState('');
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (event) => {
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            setLoggedUser(user)
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
            console.log(error.message);
        }
    };

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                setLoggedUser(result.user)
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                //const user = result.user;
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
                    Sign In
                </Typography>
                <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
                    {errorMessage ? <Alert severity='error'>{errorMessage}</Alert> : <></>}
                </Stack>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                {...register('email')}
                                error={errors.email ? true : false}
                            />
                            <Typography variant="inherit" color="red">
                                {errors.email?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register('password')}
                                error={errors.password ? true : false}
                            />
                            <Typography variant="inherit" color="red">
                                {errors.password?.message}
                            </Typography>
                            <Link to="/forget">
                                {"Forget Password"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 1 }}
                    >
                        Sign In
                    </Button>
                    <Typography component="h5" align="center">
                        OR
                    </Typography>
                    <Button
                        onClick={loginWithGoogle}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                        color="secondary"
                    >
                        <Avatar alt="Google" src="google.png" sx={{ width: 24, height: 24, mr: 1 }} /> Continue With Google
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/register">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;