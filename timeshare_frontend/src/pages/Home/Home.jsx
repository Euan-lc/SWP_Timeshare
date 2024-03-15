// import PropertyCard from "../../components/PropertyCard";
// import property1 from "../images/example2.png";
// import property2 from "../images/example1.jpg";
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import "./home.css";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { Featured, Featured2 } from "../../components/featured/FeaturedList";
import Popular from "../../components/popularList/PopularList";
import Recommended from "../../components/recommended/RecommendedList";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const [properties, setProperties] = useState([]);
    const featuredRef = useRef();
    const headerRef = useRef();

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const baseUrl = `https://swp-timeshare-back.vercel.app/api/property/all?limit=4&offset=0&sort_by=asc:price`;
                const response = await fetch(`${baseUrl}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
    
        fetchProperties();
    }, []);

    const scrollToElement = (elm) => {
        elm.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Navbar/>
            <Header ref={headerRef} scrollToElement={scrollToElement}/>
            <div className="homeContainer">
                <Featured ref={featuredRef}/>
                <Featured2/>
                <h1 className="homeTitle">Popular properties</h1>
                <Popular/>
                <h1 className="homeTitle">Recommended properties</h1>
                <Recommended properties={properties}/>
            </div>
            <Footer/>
        </div>
    );
};