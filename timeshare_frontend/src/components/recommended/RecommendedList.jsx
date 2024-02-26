import "./recommendedList.css";
import La1 from "../../images/la1.jpg";
import La2 from "../../images/la2.jpg";
import Lv1 from "../../images/lv1.jpg";
import Lv2 from "../../images/lv2.jpg"


export default function RecommendedList() {
    return (
        <div className="rp">
            <div className="rpItem">
                <img src={La1} alt="" className="rpImg" />
                <span className="rpName">Luxury Appartment</span>
                <span className="rpCity">Ho Chi Minh</span>
                <span className="rpPrice">from $499 to $4,286/night</span>
                <div className="rpRating">
                    <button>4.3</button>
                    <span>Very Good</span>
                </div>
            </div>
            <div className="rpItem">
                <img src={Lv1} alt="" className="rpImg" />
                <span className="rpName">Luxury Villa</span>
                <span className="rpCity">Da Nang</span>
                <span className="rpPrice">from $199 to $3,267/night</span>
                <div className="rpRating">
                    <button>4.6</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="rpItem">
                <img src={La2} alt="" className="rpImg" />
                <span className="rpName">Luxury Appartment</span>
                <span className="rpCity">Da Lat</span>
                <span className="rpPrice">from $299 to $2,413/night</span>
                <div className="rpRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="rpItem">
                <img src={Lv2} alt="" className="rpImg" />
                <span className="rpName">Luxury Villa</span>
                <span className="rpCity">Phu Quoc</span>
                <span className="rpPrice">from $399 to $5,000/night</span>
                <div className="rpRating">
                    <button>4.8</button>
                    <span>Perfect</span>
                </div>
            </div>
        </div>
    )
}