// import PropertyCard from "../../components/PropertyCard";
// import property1 from "../images/example2.png";
// import property2 from "../images/example1.jpg";
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {Featured, Featured2} from "../../components/featured/FeaturedList";
import Popular from "../../components/popularList/PopularList";
import Recommended from "../../components/recommended/RecommendedList";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";


export default function Home() {
    return (

        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <Featured2/>
                <h1 className="homeTitle">Popular properties</h1>
                <Popular/>
                <h1 className="homeTitle">Recommended properties</h1>
                <Recommended/>
            </div>
            <Footer/>
        </div>




        // <Container className="homePageContainer" sx={{ flexGrow: 1}} alignItems="center" justifyContent="center">
        //     <SearchBar />
        //     <Typography variant={'h3'} type={'center'}>Top Resorts</Typography>
        //     <Stack direction='row' spacing={2} sx={{flexgrow: 1}} justifyContent="center">
        //         <PropertyCard img={property1}
        //                       imgAlt={'there should be a scantily dressed woman here'}
        //                       name={'Scantily clad woman'}
        //                       location={'Da Nang, Viet Nam'}
        //                       price={500}
        //                       rating={5}
        //         />
        //         <PropertyCard img={property2}
        //                       imgAlt={'there should be a nice pool here'}
        //                       name={'Pool Side'}
        //                       location={'HCMC, Viet Nam'}
        //                       price={500}
        //                       rating={5}
        //         />
        //     </Stack>
        // </Container>
    );
};