import "./popularList.css";
import Hanoi from "../../images/hanoi.jpg";
import HoChiMinh from "../../images/hochiminh.jpg";
import DaLat from "../../images/dalat.jpg";

export default function PopularList() {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src={Hanoi} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Ho Chi Minh</h1>
                    <h2>180 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={HoChiMinh} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hanoi</h1>
                    <h2>256 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={DaLat} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Da Lat</h1>
                    <h2>150 properties</h2>
                </div>
            </div>
        </div>
    )
}