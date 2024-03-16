import "./app.css";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";

import List from "./pages/List/List";
import Timeshare from "./pages/timeshare/Timeshare2.jsx";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerAccount from "./pages/customerAccount/CustomerAccount";
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndCondition.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
// import { useSelector } from "react-redux";
// import { selectUsers } from "./store/usersSlice.js";
import Admin from "./pages/admin/Admin.jsx";

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
    // const user = useSelector(selectUsers);

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);
    }, []);
    
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/account" element={<CustomerAccount/>}/>
                    <Route path="/account/mytimeshares" element={<CustomerAccount/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/list/timeshare" element={<Timeshare/>}/>
                    <Route path="/list/timeshare/checkout" element={<Checkout/>}/>
                    <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
