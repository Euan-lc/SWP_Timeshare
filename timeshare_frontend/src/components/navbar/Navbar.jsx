import React, { useEffect, useState } from 'react';
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton'

export default function Navbar() {
    const navigate = useNavigate();

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

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Timeshare</span>
                <div className="navItems">
                    {!isLoggedIn && <button onClick={() => navigate("/register")} className="navButton">Register</button>}
                    {!isLoggedIn && <button onClick={() => navigate("/login")} className="navButton">Login</button>}
                    {isLoggedIn && <button onClick={logout} className="navButton">Logout</button>}
                    {isLoggedIn && <IconButton><AccountCircleIcon onClick={() => navigate("/account")} className="navIcon"/></IconButton>}
                </div>
            </div>
        </div>
    )
}