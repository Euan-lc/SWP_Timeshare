import {ThemeProvider, createTheme} from '@mui/material/styles';
import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchPage from "./pages/Search/SearchPage.jsx"
import PaymentPage from "./pages/Pay/payPage.jsx"
import DetailTimeshare from './components/detailPage/DetailTimeshare.jsx';
import PaymentEx from './pages/PaymentEx.jsx';

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
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='/search' element={<SearchPage/>}/>
                    <Route path='timeshare/:id' element={<DetailTimeshare/>}/>
                    <Route path='payment/:id' element={<PaymentEx/>}/>
                    {/* <Route path={"/payment"} element={<PaymentPage/>}/>  */}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;