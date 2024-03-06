import "./recommendedList.css";
import React, { useState, useEffect } from "react";

const getRatingAdjective = (rating) => {
    if (rating >= 5) {
        return "Perfect";
    } else if (rating >= 4.5) {
        return "Excellent";
    } else if (rating >= 4) {
        return "Very Good";
    } else if (rating >= 3) {
        return "Good";
    } else if (rating >= 2) {
        return "Fair";
    } else {
        return "Poor";
    }
};

export default function RecommendedList({ properties }) {

    const [propertyDetails, setPropertyDetails] = useState([]);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            const detailedProperties = await Promise.all(
                properties.map(async (property) => {
                    const response = await fetch(`https://swp-timeshare-back.vercel.app/api/property?id=${property.timeshareId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch property details');
                    }
                    const data = await response.json();
                    return { ...property, ...data };
                })
            );
            setPropertyDetails(detailedProperties);
        };

        fetchPropertyDetails();
    }, [properties]);

    return (
        <div className="rp">
            {propertyDetails.map((property) => (
                <div key={property.timeshareId} className="rpItem">
                    <img
                        src={property.img}
                        alt={property.name}
                        className="rpImg"
                    />
                    <span className="rpName">{property.name}</span>
                    <span className="rpCity">{property.address}</span>
                    <span className="rpPrice">from ${property.price}/night</span>
                    <div className="rpRating">
                        <button>{parseFloat(property.rating || "5").toFixed(1)}</button>
                        <span>{getRatingAdjective(parseFloat(property.rating || "5"))}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}