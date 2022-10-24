import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../config/firebase';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Login = () => {
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
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const forgotPassword = () => {
        sendPasswordResetEmail(auth, "")
            .then(() => {
                console.log("email sent");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
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
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
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