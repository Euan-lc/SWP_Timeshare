import {ThemeProvider, createTheme} from '@mui/material/styles';
import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PropertyList from "./pages/PropertyList";

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
                        <Route index element={<HomePage/>}/>
                        <Route path={"/properties"} element={<PropertyList/>}/>
                    </Route>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>

                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
