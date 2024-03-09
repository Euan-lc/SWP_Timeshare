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
import { provider } from "../firebase/config";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/usersSlice.js";

export default function SignInSide() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    const [userCredentials, setUserCredentials] = React.useState({});
    const [error, setError] = React.useState("");
    const auth = getAuth();
    const db = getFirestore();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const checkAdminAndRedirect = async (email) => {
        const docRef = doc(db, "adminWhitelist", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            navigate("/admin");
        } else {
            navigate("/");
        }
    };

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({ id: user.uid, email: user.email }));
                setValue(user.email);
            } else {
                dispatch(setUser(null));
            }
        });

        return unsubscribe;
    }, [auth, dispatch]);

    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password);
            await checkAdminAndRedirect(userCredential.user.email);
        } catch (error) {
            setError(error.message);
        }
    }

    function handlePasswordReset() {
        const email = prompt("Please enter you email");
        sendPasswordResetEmail(auth, email);
        alert("Email sent ! Check your inbox for password reset instructions.");
    }

    const handleClick = () => {
        signInWithPopup(auth, provider).then(async (result) => {
            const email = result.user.email;
            const docRef = doc(db, "adminWhitelist", email);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                navigate("/admin");
            } else {
                navigate("/");
            }
        })
            .catch((error) => {
                console.error("Error during Google sign-in: ", error);
                setError(error.message);
            });
    };

    React.useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, [])

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
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            onChange={(e) => { handleCredentials(e) }}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={(e) => { handleCredentials(e) }}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            onClick={(e) => { handleLogin(e) }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        {
                            error &&
                            <div className="error">
                                {error}
                            </div>
                        }
                        <div>
                            <button onClick={handleClick}>Sign In with Google</button>
                        </div>
                        <Grid container>
                            <Grid item xs>
                                <Link onClick={handlePasswordReset} href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={() => navigate("/register")} href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}