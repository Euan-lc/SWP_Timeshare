import "./timeshare.css";
import Navbar from "../../components/navbar/Navbar";
import Header from  "../../components/header/Header";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from "@mui/material/IconButton";
import Footer from "../../components/Footer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from "react-router-dom";

export default function Timeshare() {
    const navigate = useNavigate();
    const location = useLocation();

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [property] = useState(location.state.property);
    const [date] = useState(location.state.date);
    const [info] = useState(location.state.info);

    const photos = [
    {
      src: property.img,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383834711.jpg?k=e4d3c68f4377ab0366190f14d6f0daa737923c687dc1a61a5668c0a8fb410c48&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/383834714.jpg?k=62e3135d5a49e0044ec244b7d1901df9a9a03a6bd1bf6b54387330bf04587e0f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/365108922.jpg?k=8d7de3e83f63a31e63b8900a903e081143826c7396173d1629b2df983c3dac26&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/365108958.jpg?k=e9d6e5fbb3c7d337a33ed3252adf18c24702389e977a75244d5948650ee4e03e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/365108885.jpg?k=8f7724ca6dd356bc803d27fd383ee515a4fbf921448effca89346fd8547c895c&o=&hp=1",
    },
  ];

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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <IconButton> <ArrowForwardIosIcon className="arrow"
              onClick={() => handleMove("r")}/>
            </IconButton>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={() => navigate("/list/timeshare/checkout")}>Book</button>
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
              <button onClick={() => navigate("/list/timeshare/checkout")}>Book</button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};