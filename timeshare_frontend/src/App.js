import Header from "./components/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3c3c3c',
    },
      secondary: {
        main:'#fff'
      }
  },
});
function App() {
  return (
      <ThemeProvider theme={theme}>
          <Header/>
          <Footer/>
      </ThemeProvider>
  );
}

export default App;
