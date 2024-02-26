import "./header.css"
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton'
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";


export default function Header({type}) {
    const [openDate, setOpenDate] = useState(false)
    const navigate = useNavigate();
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1,
        },
    );

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            };
        });
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <Icon><HotelRoundedIcon color="secondary" className="icon"/></Icon>
                        <span className="category">Book a Trip</span>
                    </div>
                    <div className="headerListItem">
                        <Icon><SellRoundedIcon color="secondary" className="icon"/></Icon>
                        <span className="category">Rent my Timeshare</span>
                    </div>
                    <div className="headerListItem">
                        <Icon><StorefrontRoundedIcon color="secondary" className="icon"/></Icon>
                        <span className="category">Sell my Timeshare</span>
                    </div>
                    <div className="headerListItem">
                        <Icon><StarOutlineRoundedIcon color="secondary" className="icon"/></Icon>
                        <span className="category">Top Properties</span>
                    </div>
                </div>
                {type !== "list" && 
                    <>
                    <h1 className="headerTitle">Timeshare Rentals</h1>
                <p className="headerDesc">Get the best timeshare rentals</p>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <Icon><BedRoundedIcon className="searchIcon"/></Icon>
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
                    </div>
                    <div className="headerSearchItem">
                        <Icon><CalendarMonthRoundedIcon className="searchIcon"/></Icon>
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <Icon><GroupsIcon className="searchIcon"/></Icon>
                        <span onClick={() => setOpenOptions(!openOptions)}className="headerSearchText">{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button
                                        disabled={options.adult <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "d")}
                                        >-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button
                                        disabled={options.children <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "d")}
                                        >-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button
                                        disabled={options.room <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "d")}
                                        >-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                    </div>
                    <div className="headerSearchItem">
                        {/* <Link to={'/search'}> */}
                         <IconButton onClick={() => navigate("/search")}><SearchRoundedIcon className="searchIconButton"/></IconButton>
                        {/* </ink> */}
                    </div>
                </div></>}
            </div>
        </div>
    )
}