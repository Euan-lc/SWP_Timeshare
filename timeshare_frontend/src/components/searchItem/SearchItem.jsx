import "./searchItem.css";
import La1 from "../../images/la1.jpg"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function SearchItem({ timeshareId, info, date }) {
    const navigate = useNavigate();
    const [property, setProperty] = useState({});

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch(`https://swp-timeshare-back.vercel.app/api/property?id=${timeshareId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch property details');
                }
                const data = await response.json();
                setProperty(data[0]);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
    
        fetchProperties();
    }, [timeshareId]);

    return (
        <div className="searchItem">
            <img
            src={property.img}
            alt=""
            className="siImg"
            onClick={() => navigate("/list/timeshare", { state: { property, info, date } })}
            />
            <div className="siDesc">
                <h1 className="siTitle" onClick={() => navigate("/list/timeshare", { state: { property, info, date } })}>{property.name}</h1>
                <span className="siDistance">{property.address}</span>
                <span className="siTaxiOp">{property.description}</span>
                <span className="siSubtitle">Capacity: {property.capacity}</span>
                <span className="siFeatures">Size: {property.size}m²</span>
                <span className="siCancelOp">Cancel Option</span>
                <span className="siCancelOpSubtitle">Cancel option available</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>{info.rating}</button>
                </div>
                <div className="siDetailsText">
                    <span className="siPrice">${property.price}</span>
                    <span className="siPeriod">per night</span>
                    <button className="siButton" onClick={() => navigate("/list/timeshare", { state: { property, info, date } })}>Book</button>
                </div>
            </div>
        </div>
    )
}