import React, { useState } from 'react'
import "./filterBar.css";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Rating from '@mui/material/Rating';

function CheckboxList({ checkboxes, setCheckboxes }) {
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = !newCheckboxes[index].checked;
    setCheckboxes(newCheckboxes);
  };

  return (
    <div>
      {checkboxes.map((checkbox, index) => (
        <div key={index}>
          <label>
            <input style={{marginRight:10}} type="checkbox"  checked={checkbox.checked} onChange={() => handleCheckboxChange(index)} />
            {checkbox.label}
          </label>
        </div>
      ))}
    </div>
  );
}

function RatingFilter({ ratings, onRatingChange }) {
  return (
    <div>
      {ratings.map((rating, index) => (
        <div key={index}>
          <input type="checkbox" checked={rating.checked} onChange={() => onRatingChange(index)} />
          <label>
            <Rating name="read-only" value={rating.value} readOnly />
            {/* {rating.label} */}
          </label>
        </div>
      ))}
    </div>
  );
}

export default function FilterBar() {

  const LocationCheckboxes = [
    { label: 'Ho Chi Minh', checked: false },
    { label: 'Da Nang', checked: false },
    { label: 'Ha Noi', checked: false },
    { label: 'Ha Long', checked: false },
    { label: 'Da Lat', checked: false },
    { label: 'Hoi An', checked: false },
    { label: 'Phu Quoc', checked: false },
    { label: 'Nha Trang', checked: false },
  ];

  const RatingCheckboxes = [
    { label: '5 Star', value: 5, checked: false },
    { label: '4 Stars', value: 4, checked: false },
    { label: '3 Stars', value: 3, checked: false },
    { label: '2 Stars', value: 2, checked: false },
    { label: '1 Stars', value: 1, checked: false },
  ];

  const PriceCheckboxes = [
    { label: '<200', checked: false },
    { label: '200-500', checked: false },
    { label: '500-1000', checked: false },
    { label: '>1000', checked: false },
  ];
  const [location, setLocation] = useState(LocationCheckboxes);
  const [rating, setRating] = useState(RatingCheckboxes);
  const [price, setPrice] = useState(PriceCheckboxes);
 
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleRatingChange = (index) => {
    const newRatings = [...rating];
    newRatings[index].checked = !newRatings[index].checked;
    setRating(newRatings);
  };
  

  

  return (
    <div className="container-filter">
      <div className="filter-wrapper">
        <div className="filter-text">
          <span>
            <span className='icon'><FilterAltOutlinedIcon fontSize='large'/></span>
            <span className='text'>Filter</span>
          </span>
        </div>
        <div className="filter-box">
          <p className='name-filter'>Location</p>
            <div>
                <CheckboxList checkboxes={showAll ? location : location.slice(0, 5)} setCheckboxes={setLocation} />
                {!showAll && <button className='button-filter' onClick={handleShowMore}>More</button>}
            </div>
        </div>
        <div className="filter-box">
          <p className='name-filter'>Price</p>
            <div>
            <CheckboxList checkboxes={showAll ? price : price.slice(0, 5)} setCheckboxes={setPrice} />
            </div>
        </div>
        {/* <div className="filter-box">
          <p className='name-filter'></p>
            <span className='checkbox'>
              <span className='icon'></span>
              <span className='text'></span>
            </span>
        </div> */}
        <div className="filter-box">
          <p className='name-filter'>Rating</p>
            <div>
            <RatingFilter ratings={rating} onRatingChange={handleRatingChange} />
            </div>
        </div>
      </div>
    </div>
  )
}

{/* {location.slice(0, showAll ? location.length : 5).map((checkbox, index) => ( */}
                  // <Checkbox
                  //   key={index}
                  //   label={checkbox.label}
                  //   checked={checkbox.checked}
                  //   onChange={() => handleLocationCheckboxChange(index)}
                  // />
                  // ))}