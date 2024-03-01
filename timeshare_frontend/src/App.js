import "./app.css";
import {ThemeProvider, createTheme} from '@mui/material/styles';
// import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/list/List";
import Timeshare from "./pages/timeshare/Timeshare2.jsx";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerAccount from "./pages/customerAccount/CustomerAccount";
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

const clientId = "122285275633-uldisg6noor0qau5shbh6hmc5j6mmtai.apps.googleusercontent.com"

const theme = createTheme({
    palette: {
        primary: {
            main: '#3c3c3c',
        },
        secondary: {
            main: '#fff'
        }
    },
});

function App() {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);
    });
    
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/account" element={<CustomerAccount/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/list/timeshare" element={<Timeshare/>}/>
                    <Route path="/list/timeshare/checkout" element={<Checkout/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
