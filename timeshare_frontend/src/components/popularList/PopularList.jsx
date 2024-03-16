import "./popularList.css";
import Hanoi from "../../images/hanoi.jpg";
import HoChiMinh from "../../images/hochiminh.jpg";
import DaLat from "../../images/dalat.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PopularList() {

    const navigate = useNavigate();

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [options] = useState(
        {
            adult: 1,
            children: 0,
            room: 1,
        },
    );

    useEffect(() => {
        setDate((currentDate) => {
          const newEndDate = new Date(currentDate[0].startDate.getTime());
          newEndDate.setDate(newEndDate.getDate() + 1);
          return [
            {
              ...currentDate[0],
              endDate: newEndDate,
            },
          ];
        });
      }, []);

    return (
        <div className="pList">
            <div className="pListItem"
            onClick={() => navigate("/list", { state: { destination:"Ho Chi Minh", date, options } })}>
                <img src={HoChiMinh} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Ho Chi Minh</h1>
                    <h2>Visit this beautiful city</h2>
                </div>
            </div>
            <div className="pListItem"
            onClick={() => navigate("/list", { state: { destination:"Hanoi", date, options } })}>
                <img src={Hanoi} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hanoi</h1>
                    <h2>Visit the capital city</h2>
                </div>
            </div>
            <div className="pListItem"
            onClick={() => navigate("/list", { state: { destination:"Da Lat", date, options } })}>
                <img src={DaLat} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Da Lat</h1>
                    <h2>Excellent for finding prosperity</h2>
                </div>
            </div>
        </div>
    )
}