import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

export default function Register() {
    const navigate = useNavigate();
    const db = getFirestore();


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [userCredentials, setUserCredentials] = React.useState({});
    const [error, setError] = React.useState("");


    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }

    // function handleSignUp(e) {
    //     e.preventDefault();
    //     setError("");

    //     createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    //         .then(async (userCredential) => {
    //             const uid = userCredential.user.uid;
    //             const apiUrl = `https://swp-timeshare-back.vercel.app/api/customer?id=${uid}`;

    //             fetch(apiUrl, { method: 'POST' })
    //                 .then(data => {
    //                     console.log('Success:', data);
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error:', error);
    //                     setError("Failed to register the user in the database.");
    //                 });

    //             // Check against the whitelist in Firestore
    //             const docRef = doc(db, "adminWhitelist", userCredentials.email);
    //             const docSnap = await getDoc(docRef);
    //             if (docSnap.exists()) {
    //                 navigate("/admin");
    //             } else {
    //                 navigate("/");
    //             }
    //         })
    //         .catch((error) => {
    //             // Handle errors from Firebase Authentication
    //             setError(error.message);
    //         });

    // }

    function handleSignUp(e) {
        e.preventDefault();
        setError("");
    
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then(async (userCredential) => {
                const uid = userCredential.user.uid;
                const defaultUserData = {
                    "Name": "Name",
                    "Last name": "Last name",
                    "Date of birth": "01/01/2024",
                    "Gender": "F",
                    "Email": userCredentials.email,
                    "Phone number": "1234567890"
                };
    
                try {
                    await setDoc(doc(db, "users", uid), defaultUserData);
                } catch (error) {
                    console.error('Error adding document: ', error);
                    setError("Failed to register the user in the database.");
                    return;
                }
    
                const apiUrl = `https://swp-timeshare-back.vercel.app/api/customer?id=${uid}`;
    
                fetch(apiUrl, { method: 'POST' })
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        setError("Failed to register the user in the database.");
                    });
    
                // Check against the whitelist in Firestore
                const docRef = doc(db, "adminWhitelist", userCredentials.email);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            })
            .catch((error) => {
                // Handle errors from Firebase Authentication
                setError(error.message);
            });
    
    }

    console.log(auth);

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            {/* <Grid item xs={12} sm={6}>

                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => { handleCredentials(e) }}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => { handleCredentials(e) }}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel

                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={(e) => { handleSignUp(e) }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        {
                            error &&
                            <div className="error">
                                {error}
                            </div>
                        }

                        <Grid container direction="column" alignItems="flex-end">

                            <Grid item>
                                <Link onClick={() => navigate("/login")} href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={() => navigate("/")} href="#" variant="body2">
                                    {"Go back to homepage"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}