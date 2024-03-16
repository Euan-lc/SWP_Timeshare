import "./featuredList.css";
import Danang from "../../images/danang.jpg";
import PhuQuoc from "../../images/phuquoc.jpg";
import HoiAn from "../../images/hoian.jpg";
import HaLong from "../../images/halong.jpg";
import NhaTrang from "../../images/nhatrang.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Featured() {

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
        <div className="featured">
            <div className="featuredItem" onClick={() => navigate("/list", { state: { destination: "Da Nang", date, options } })}>
                <img
                    src={Danang}
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Da Nang</h1>
                    <h2>Top #1</h2>
                </div>
            </div>
            <div className="featuredItem" onClick={() => navigate("/list", { state: { destination: "Phu Quoc", date, options } })}>
                <img
                    src={PhuQuoc}
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Phu Quoc</h1>
                    <h2>Top #2</h2>
                </div>
            </div>
            <div className="featuredItem" onClick={() => navigate("/list", { state: { destination: "Hoi An", date, options } })}>
                <img
                    src={HoiAn}
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Hoi An</h1>
                    <h2>Top #3</h2>
                </div>
            </div>
        </div>
    );
};

function Featured2() {

    const navigate = useNavigate();

    const [date] = useState([
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

    return (
        <div className="featured">
            <div className="featuredItem" onClick={() => navigate("/list", { state: { destination: "Ha Long", date, options } })}>
                <img
                    src={HaLong}
                    alt=""
                    className="featuredImg2"
                />
                <div className="featuredTitles">
                    <h1>Ha Long</h1>
                    <h2>Top #4</h2>
                </div>
            </div>
            <div className="featuredItem" onClick={() => navigate("/list", { state: { destination: "Nha Trang", date, options } })}>
                <img
                    src={NhaTrang}
                    alt=""
                    className="featuredImg2"
                />
                <div className="featuredTitles">
                    <h1>Nha Trang</h1>
                    <h2>Top #5</h2>
                </div>
            </div>
        </div>
    );
};

export { Featured, Featured2 };