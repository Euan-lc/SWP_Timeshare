import "./featuredList.css"
import Danang from "../../images/danang.jpg"
import PhuQuoc from "../../images/phuquoc.jpg"
import HoiAn from "../../images/hoian.jpg"
import HaLong from "../../images/halong.jpg"
import NhaTrang from "../../images/nhatrang.jpg"

function Featured() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                src={Danang}
                alt=""
                className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Da Nang</h1>
                    <h2>128 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                src={PhuQuoc}
                alt=""
                className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Phu Quoc</h1>
                    <h2>64 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                src={HoiAn}
                alt=""
                className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Hoi An</h1>
                    <h2>92 properties</h2>
                </div>
            </div>
        </div>
    );
};

function Featured2() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                src={HaLong}
                alt=""
                className="featuredImg2"
                />
                <div className="featuredTitles">
                    <h1>Ha Long</h1>
                    <h2>86 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                src={NhaTrang}
                alt=""
                className="featuredImg2"
                />
                <div className="featuredTitles">
                    <h1>Nha Trang</h1>
                    <h2>45 properties</h2>
                </div>
            </div>
        </div>
    );
};

export {Featured, Featured2};