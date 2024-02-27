import "./searchItem.css";
import La1 from "../../images/la1.jpg"
import { useNavigate } from "react-router-dom";

export default function SearchItem() {
    const navigate = useNavigate();

    return (
        <div className="searchItem">
            <img
            src={La1}
            alt=""
            className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Luxurious Apartment</h1>
                <span className="siDistance">250m from center</span>
                <span className="siTaxiOp">Excellent location</span>
                <span className="siSubtitle">Beautiful view</span>
                <span className="siFeatures">Kitchen/Spa</span>
                <span className="siCancelOp">Cancel Option</span>
                <span className="siCancelOpSubtitle">Cancel option available</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>4.5</button>
                </div>
                <div className="siDetailsText">
                    <span className="siPrice">$499</span>
                    <span className="siPeriod">per night</span>
                    <button className="siButton" onClick={() => navigate("/list/timeshare")}>Book</button>
                </div>
            </div>
        </div>
    )
}