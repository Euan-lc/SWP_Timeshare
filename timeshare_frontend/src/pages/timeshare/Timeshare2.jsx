import "./timeshare.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from "@mui/material/IconButton";
import Footer from "../../components/Footer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, {useCallback, useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate, useLocation} from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroller';
import SearchItem from "../../components/searchItem/SearchItem";
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Reviews(props) {
    const [reviews, setReviews] = useState([])
    const [hasMoreReviews, setHasMoreReviews] = useState(true)
    const timeshareId = props.timeshareId
    const limit = 5;
    const fetchReviews = async (page) => {
        page = page * limit
        console.log(`fetching https://swp-timeshare-back.vercel.app/api/review?id=${props.timeshareId}&limit=${limit}&offset=${page}`)

        try {
            let response = await fetch(`https://swp-timeshare-back.vercel.app/api/review?id=${props.timeshareId}&limit=${limit}&offset=${page}`);
            if (!response.ok) {
                throw new Error('failed to fetch reviews')
            }
            const data = await response.json();
            if (data.length) {
                setReviews([...reviews, ...data])
            } else {
                setHasMoreReviews(false)
            }
        } catch (error) {
            console.error('error fetching reviews', error)
        }
    }

    return (<>
        <InfiniteScroll
            pageStart={-1}
            loadMore={fetchReviews}
            hasMore={hasMoreReviews}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {reviews.map((review) => (
                <div className='review-item'><AccountCircleIcon/> {review['rating']} <StarIcon/><br/><FormatQuoteIcon/>{review['comment']}<FormatQuoteIcon/></div>
            ))}
        </InfiniteScroll>

    </>)
}

export default function Timeshare() {
    const navigate = useNavigate();
    const location = useLocation();

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [property, setProperty] = useState(location.state.property);
    const [timeshareId] = useState(location.state.timeshareId);
    const [date] = useState(location.state.date);
    const [info] = useState(location.state.info);
    const [photos, setPhotos] = useState([{
        src: property.img,
    }])
    const fetchProperty = async () => {
        try {
            var response = null;
            const baseUrl = `https://swp-timeshare-back.vercel.app/api/property/?id=${timeshareId}`;
            response = await fetch(`${baseUrl}`);
            if (!response.ok) {
                throw new Error('Failed to fetch photos');
            }
            const data = await response.json();
            let photoSrcList = data.images.map((x) => {
                return {src: x}
            })
            setPhotos([...photos, ...photoSrcList]);
            setProperty(data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setOpen(false)
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        fetchProperty();

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            if (slideNumber === 0) {
                newSlideNumber = photos.length - 1;
            } else {
                newSlideNumber = slideNumber - 1;
            }
            // newSlideNumber = slideNumber === 0 ? photos.length : (slideNumber - 1)%photos.length;
        } else {
            newSlideNumber = slideNumber === photos.length ? 0 : (slideNumber + 1) % photos.length;
        }

        setSlideNumber(newSlideNumber)
    };

    const calculateDaysBetween = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const timeDifference = endDate.getTime() - startDate.getTime();
        const dayDifference = timeDifference / (1000 * 3600 * 24);
        return dayDifference;
    };

    const totalDays = calculateDaysBetween(date[0].startDate, date[0].endDate);

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <IconButton> <CloseIcon className="close"
                                                onClick={() => setOpen(false)}/>
                        </IconButton>
                        <IconButton> <ArrowBackIosIcon className="arrow"
                                                       onClick={() => handleMove("l")}/>
                        </IconButton>
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                        </div>
                        <IconButton> <ArrowForwardIosIcon className="arrow"
                                                          onClick={() => handleMove("r")}/>
                        </IconButton>
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow" onClick={() => navigate("/list/timeshare/checkout", {
                        state: {
                            property,
                            timeshareId,
                            date,
                            info
                        }
                    })}>Book
                    </button>
                    <h1 className="hotelTitle">{property.name}</h1>
                    <div className="hotelAddress">
                        <IconButton><LocationOnIcon/></IconButton>
                        <span>{property.address}</span>
                    </div>

                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelDesc">
                                {property.description}
                            </h1>
                            <h3>
                                Surface area : {property.size}m²<br/>
                                Capacity : {property.capacity}<br/>
                                Number of rooms : {property.nbRoom}<br/>
                            </h3>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a long stay!</h1>
                            <h2>
                                <b>${totalDays * property.price}</b> ({totalDays} night(s))
                            </h2>
                            <button onClick={() => navigate("/list/timeshare/checkout", {
                                state: {
                                    property,
                                    timeshareId,
                                    date,
                                    info
                                }
                            })}>Book
                            </button>
                        </div>
                    </div>
                    <div className='review-container'>
                        <h2>
                            <span>Reviews :  </span><span>{info.rating}<StarIcon/></span>
                        </h2>
                        <Reviews timeshareId={timeshareId}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};