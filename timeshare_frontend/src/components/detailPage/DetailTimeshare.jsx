import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DiscountIcon from '@mui/icons-material/Discount';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import la1 from '../../images/la1.jpg'
import la2 from '../../images/la2.jpg'
import la3 from '../../images/la3.jpg'
import la4 from '../../images/la4.jpg'
import "./detailTimeshare.css";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

export default function DetailTimeShare(){
    const nav = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const ShowPayment = (id) => () =>{
        nav(`payment/${id}`);
    }

    return(
        <div id="car-detail">
            <Header/>
            <div className="body">
                <div className="img-container">
                    <img src={la1} alt="" className="item-1"/>
                    <img src={la2} alt="" className="item-2"/>
                    <img src={la3} alt="" className="item-3"/>
                    <img src={la4} alt="" className="item-4"/>
                </div>
                <div className="timeshare-info">
                    <div className="info">
                        <div className="name">
                            <p>Forest Mansion</p>
                        </div>
                        <div className="rating">
                            <StarRoundedIcon style={{color: "rgb(255, 225, 0)"}}/><p>5.0</p>
                            <div className="dot">
                                <FiberManualRecordIcon style={{height: "10px"}}/>
                            </div>
                            <p>Phan Thiet, VietNam</p>
                        </div>
                        <hr/>
                        <div className="description">
                            <div className="titl">
                                <p>Description: </p>       
                            </div>
                            <div className="descript" style={{
                                lineHeight:1.5,
                                margin: 10
                            }}>
                                <p>The Forest Mansion is a serene retreat nestled deep within the lush greenery of a dense forest. Surrounded by towering trees and the tranquil sounds of nature, this enchanting dwelling offers a secluded escape from the hustle and bustle of everyday life. With its rustic charm and natural beauty, the Forest Mansion provides a peaceful haven where guests can unwind, reconnect with nature, and rejuvenate their senses. Whether you seek adventure in the wilderness or simply wish to immerse yourself in the serenity of the forest, the Forest Mansion promises an unforgettable experience in harmony with the great outdoors.</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="price">
                        <h1>
                            <span style={{verticalAlign:'middle'}}><AttachMoneyIcon fontSize="rem"/></span>
                            <span style={{verticalAlign:'middle'}}>400/night</span>
                        </h1>
                        <div className="period">
                            <div className="book">
                                <table>
                                    <tr>
                                        <td style={{fontWeight:600}}>Check-in date</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>20/02/2024</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="vertical-line"></div>
                            <div className="return">
                                <table>
                                    <tr>
                                        <td style={{fontWeight:600}}>Check-out date</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>23/02/2024</td>
                                        {/* <td style={{paddingLeft: "10px"}}>8:00</td> */}
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <br/>
                        <div className="night-time">
                            <div style={{fontWeight:600}}>Times</div>
                            <div className="night" style={{alignItems:"flex-end"}}>3 night</div>
                        </div>
                        <br/>
                        <hr style={{padding: "0 21px"}}/>
                        <div className="charge-section">
                            <div>
                                <p>Price</p>
                                <p>
                                    {/* 850.000 đ/ngày */}
                                    <span style={{verticalAlign:'middle'}}><AttachMoneyIcon fontSize="rem"/></span>
                                    <span style={{verticalAlign:'middle'}}>400/night</span>
                                </p>
                            </div>
                            <div>
                                <p>Tax (10%)</p>
                                <p>
                                    <span style={{verticalAlign:'middle'}}><AttachMoneyIcon fontSize="rem"/></span>
                                    <span style={{verticalAlign:'middle'}}>40</span>
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <div className="voucher">
                            <div>
                                <DiscountIcon style={{height: "16px"}}/><p>Mã khuyến mãi</p>
                            </div>
                            <div><ArrowForwardIosIcon style={{height: "16px"}}/></div>
                        </div>
                        <hr/>
                        <div className="payment">
                            <p>Total Amount</p>
                            <p>
                                <span style={{verticalAlign:'middle'}}><AttachMoneyIcon fontSize="rem"/></span>
                                <span style={{verticalAlign:'middle'}}>1240</span>
                            </p>
                        </div>
                        <Button variant="contained" onClick={ShowPayment(1)}>Pay</Button>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}