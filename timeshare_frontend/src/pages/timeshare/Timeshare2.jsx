import "./timeshare.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from "@mui/material/IconButton";
import Footer from "../../components/Footer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate, useLocation} from "react-router-dom";

export default function Timeshare() {
    const navigate = useNavigate();
    const location = useLocation();

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [property] = useState(location.state.property);
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
            let photoSrcList = data.images.map((x)=>{return {src: x}})
            setPhotos([...photos, ...photoSrcList]);
            console.log(photos)
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };
    useEffect(() => {
        fetchProperty()
    }, []);
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
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
                    <span className="hotelDistance">
            Excellent location
          </span>
                    <span className="hotelPriceHighlight">
            Only available on timeshare.com
          </span>
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
                            <h1 className="hotelTitle">Stay in the heart of City</h1>
                            <p className="hotelDesc">
                                {property.description}
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a long stay!</h1>
                            <span>
                Located in the real heart of {property.address}, this property has an
                excellent location score of {info.rating}!
              </span>
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
                </div>
            </div>
            <Footer/>
        </div>
    );
};