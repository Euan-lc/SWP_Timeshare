import React, { useState } from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import Slider from 'react-slider';
import InfiniteScroll from 'react-infinite-scroller';

export default function List() {
    const navigate = useNavigate();
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [price, setPrice] = useState({
        min: location.state.price?.min || 0,
        max: location.state.price?.max || 150,
    });

    const [properties, setProperties] = useState([]);
    const [hasMoreProps, setHasMoreProps] = useState(true);

    const handleSearch = () => {
        navigate("/list", { state: { destination, date, options, price } });
        window.location.reload();
    }

    const handleOptionChange = (optionName, value) => {
        setOptions((prevOptions) => ({
          ...prevOptions,
          [optionName]: value,
        }));
      };
      
      const handlePriceChange = (priceType, value) => {
        setPrice((prevPrice) => ({
          ...prevPrice,
          [priceType]: value,
        }));
      };

    const fetchProperties = async (page) => {
        try {
            let offset = page * 10;
            var response = null;
            const baseUrl = `https://swp-timeshare-back.vercel.app/api/property/all?limit=10&offset=${offset}&sort_by=asc:price&start:${date[0].startDate}&end:${date[0].endDate}&location=${destination}`;
            const baseUrlWithBothPrice = `https://swp-timeshare-back.vercel.app/api/property/all?limit=10&offset=${offset}&sort_by=asc:price&start:${date[0].startDate}&end:${date[0].endDate}&location=${destination}&price=lt:${price.max}&price=gt:${price.min}`;
            // const queryParams = ``;
            if (price.min === '' && price.max === '') {
                response = await fetch(`${baseUrl}`);
            } else {
                response = await fetch(`${baseUrlWithBothPrice}`);
            }
            if (!response.ok) {
                throw new Error('Failed to fetch properties');
            }
            const data = await response.json();
            if(data.length){setProperties([...properties, ...data]);}
            else{setHasMoreProps(false)}

        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

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
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                            <div className="lsItem">
                                <label>Destination</label>
                                <input onChange={e=>setDestination(e.target.value)} placeholder={destination} type="text" />
                            </div>
                            <div className="lsItem">
                                <label>Check-in</label>
                                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "yyyy-MM-dd")} to ${format(date[0].endDate, "yyyy-MM-dd")}`}</span>
                                    {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={handleDateChange}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    minDate={new Date()}
                                    />}
                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" min={0} max={150} className="lsOptionInput" 
                                    value={price.min === '' ? '' : parseInt(price.min)}
                                    onChange={(e) => handlePriceChange('min', parseInt(e.target.value))}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" min={0} max={150} className="lsOptionInput" 
                                    value={price.max === '' ? '' : parseInt(price.max)}
                                    onChange={(e) => handlePriceChange('max', parseInt(e.target.value))}/>
                                </div>
                                <div className="lsOptionItem">
                                    <Slider
                                        className="slider"
                                        min={0}
                                        max={150}
                                        value={[parseInt(price.min), parseInt(price.max)]}
                                        onChange={(value) => {
                                            handlePriceChange('min', value[0]);
                                            handlePriceChange('max', value[1]);
                                        }}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Adult
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}
                                    onChange={(e) => handleOptionChange('adult', parseInt(e.target.value))}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children}
                                    onChange={(e) => handleOptionChange('children', parseInt(e.target.value))}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Room
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room}
                                    onChange={(e) => handleOptionChange('room', parseInt(e.target.value))}/>
                                </div>
                                </div>
                            </div>
                        <button onClick={() => handleSearch()}>Search</button>
                    </div>
                    <InfiniteScroll
                        pageStart={-1}
                        loadMore={fetchProperties}
                        hasMore={hasMoreProps}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        {properties.map((property) => (
                                    <SearchItem timeshareId={property.timeshareId} info={property} date={date} />
                                ))}
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}