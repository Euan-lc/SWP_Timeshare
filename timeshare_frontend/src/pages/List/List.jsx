import React, { useState, useEffect } from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";

export default function List() {
    const navigate = useNavigate();
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [price, setPrice] = useState({
        min: location.state.price?.min || '',
        max: location.state.price?.max || '',
    });

    const [properties, setProperties] = useState([]);

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

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                var response = null;
                const baseUrl = `https://swp-timeshare-back.vercel.app/api/property/all?limit=10&offset=0&sort_by=asc:price&start:${date[0].startDate}&end:${date[0].endDate}&location=${destination}`;
                const baseUrlWithBothPrice = `https://swp-timeshare-back.vercel.app/api/property/all?limit=10&offset=0&sort_by=asc:price&start:${date[0].startDate}&end:${date[0].endDate}&location=${destination}&price=lt:${price.max}&price=gt:${price.min}`;
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
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
    
        fetchProperties();
    }, []);

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
                                    onChange={item=>setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                    />}
                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={price.min}
                                    onChange={(e) => handlePriceChange('min', parseInt(e.target.value))}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={price.max}
                                    onChange={(e) => handlePriceChange('max', parseInt(e.target.value))}/>
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
                    <div className="listResult">
                        {properties.length > 0 ? (
                            properties.map((property) => (
                            <SearchItem timeshareId={property.timeshareId} info={property} date={date} />
                        ))
                        ) : (
                            <p className="errorMessage">No properties found or available.</p>
                         )}
                    </div>
                </div>
            </div>
        </div>
    )
}