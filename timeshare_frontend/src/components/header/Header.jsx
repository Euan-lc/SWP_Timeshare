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
import { useEffect, useRef } from "react";


export default function Header({type}) {
    const navigate = useNavigate();

    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
            key: "selection",
        },
    ]);

    useEffect(() => {
        setDate((currentDate) => {
            const newEndDate = new Date(currentDate.startDate);
            newEndDate.setDate(newEndDate.getDate() + 1);
            return { ...currentDate, endDate: newEndDate };
        });
    }, []);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 0
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

    const handleSearch = () => {
        navigate("/list", { state: { destination, date, options } });
    }

    const dateRef = useRef(null);
    const clickRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {

            const isDateRangeClick =
                event.target.closest('.rdrCalendarWrapper.rdrDateRangeWrapper.date');

            if (dateRef.current && !dateRef.current.contains(event.target) && !isDateRangeClick && openDate) {
                setOpenDate(false);
            }

            if (clickRef.current && !clickRef.current.contains(event.target) && openOptions && !event.target.closest('.options')) {
                setOpenOptions(false);
            }
            
        }
    


        document.addEventListener('click', handleOutsideClick);

        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, [openDate, openOptions]);

    // const handleSearchClick = () => {
    //     setOpenDate(!openDate);
    //   };

    const handleDateChange = (ranges) => {
        const currentRange = ranges.selection;
        if (ranges.selection.endDate === ranges.selection.startDate){
            const newEndDate = new Date(currentRange.endDate);
            newEndDate.setDate(newEndDate.getDate() + 1);
            const updatedRange = {
                startDate: currentRange.startDate,
                endDate: newEndDate,
                key: "selection",
                };
    
            setDate([updatedRange]);
        }
        else {
            setDate([ranges.selection]);
        }
    };
    

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <Icon><HotelRoundedIcon color="secondary" className="icon"/></Icon>
                        <span className="category">Book a Timeshare</span>
                    </div>
                    <div className="headerListItem">
                        <Icon><SellRoundedIcon color="secondary" className="icon"/></Icon>
                        <span className="category">Featured Properties</span>
                    </div>
                    <div className="headerListItem">
                        <Icon><StorefrontRoundedIcon color="secondary" className="icon"/></Icon>
                        <span className="category">Recommended Properties</span>
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
                        <input
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        onChange={e=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <Icon><CalendarMonthRoundedIcon className="searchIcon"/></Icon>
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText" ref={dateRef}>{`${format(date[0].startDate, "yyyy-MM-dd")} to ${format(date[0].endDate, "yyyy-MM-dd")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={handleDateChange}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <Icon><GroupsIcon className="searchIcon"/></Icon>
                        <span onClick={() => setOpenOptions(!openOptions)}className="headerSearchText" ref={clickRef}>{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
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
                        <IconButton><SearchRoundedIcon onClick={() => handleSearch()} className="searchIconButton"/></IconButton>
                    </div>
                </div></>}
            </div>
        </div>
    )
}