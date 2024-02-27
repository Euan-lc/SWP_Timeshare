import React from 'react'
import "./searchList.css";
import { Timeshares } from '../ListOfTimeshare';
import { Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WifiIcon from '@mui/icons-material/Wifi';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

const options = ['Low to Hight Price', 'High to Low Price'];

const Sorting = () =>{
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div style={{height:50, display:'flex'}}>
        {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div> */}
        <br />
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 220 }}
            renderInput={(params) => <TextField {...params} />}
        />
        </div>
    );
}



export default function SearchList() {
    const nav = useNavigate();

    const ShowTimeshare = (id) =>()=>{
        nav('timeshare/'+id);
    }

    const ShowPayment = (id)=>()=>{
        // event.stopPropagation()
        nav(`payment/${id}`);
    }


  return (
    <div>
        <div className="container">
            <div className="sort-bar">
                <div className="sorting">
                    <p>Sort by: </p>
                    <Sorting/>
                </div>
            </div>
            {Timeshares.map((timeshare)=>(
                <div className="card" key={timeshare.id}>
                <div className='timeshare-button'>
                    <div className="img-timeshare" onClick={ShowTimeshare(timeshare.id)}>
                    <img src={timeshare.img} alt={timeshare.imgAlt} />
                    </div>
                    <div className="info-timeshare"onClick={ShowTimeshare(timeshare.id)}>
                         <div className="info">
                                <h1>{timeshare.name}</h1>
                            <Rating name="half-rating-read" defaultValue={timeshare.rating} precision={0.1} readOnly /><br/>
                            <span className='icon'> <LocationOnIcon/></span>
                            <span className='text'>{timeshare.location}</span>
                           
                         </div>
                         <div className="service">
                            <p>
                                <span className='icon'><AcUnitIcon/></span>
                                <span className='text'>Aircondition</span>
                            </p>
                            <p>
                                <span className='icon'><WifiIcon/></span>
                                <span className='text'>Wifi</span>
                            </p>
                         </div>
                    </div>
                    <div className="box-timeshare">
                        <div className="price-timeshare" onClick={ShowTimeshare(timeshare.id)}>
                            <p className='price'>
                                <span className='icon'><AttachMoneyIcon fontSize='large'/></span>
                                <span className='text'>{timeshare.price}</span>
                            </p> <br/>
                            <p style={{fontSize:16, paddingLeft:25}}>for <span style={{fontSize:25}}>1</span> night</p>
                        </div>
                        <div className="book-timeshare">
                            <button className='book-button'>
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
