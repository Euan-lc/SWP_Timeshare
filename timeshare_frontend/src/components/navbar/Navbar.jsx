import React, { useEffect, useState } from 'react';
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        localStorage.clear();
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsLoggedIn(!!user);
            if (user){
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const logout = () => {
        const auth = getAuth();
        auth.signOut();
    };

    function handleLogOut() {
        if (window.confirm("Are you sure you want to log out?")) {
            navigate("/");
            signOut(auth).then(() => {
                dispatch(setUser(null));
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo" onClick={() => navigate("/")}>Timeshare</span>
                <div className="navItems">
                    {!isLoggedIn && <button onClick={() => navigate("/register")} className="navButton">Register</button>}
                    {!isLoggedIn && <button onClick={() => navigate("/login")} className="navButton">Login</button>}
                    {isLoggedIn && <button onClick={handleLogOut} className="navButton">Logout</button>}
                    {isLoggedIn && <IconButton onClick={() => navigate("/account")} ><AccountCircleIcon className="navIcon"/></IconButton>}
                </div>
            </div>
        </div>
    )
}