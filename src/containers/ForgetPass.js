import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

import { auth } from '../config/firebase';

const ForgetPass = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (event) => {
        // event.preventDefault();
        sendPasswordResetEmail(auth, "")
            .then(() => {
                console.log("email sent");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

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
                    Forget Password
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>
                                Enter Your Email Address
                            </Typography>
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
                            <Button
                                onClick={handleSubmit(onSubmit)}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Send to Email
                            </Button>

                        </Grid>
                    </Grid>
                    <Link to="/login">
                        {"Back to Login"}
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default ForgetPass;