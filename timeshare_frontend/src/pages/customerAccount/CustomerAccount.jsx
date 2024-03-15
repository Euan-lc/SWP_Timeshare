import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import "./customerAccount.css";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Rating } from 'react-simple-star-rating';

const Stars = () => {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
  }

  return (
    <>
    <p className='review'>Review your trip</p>
    <Rating onClick={handleRating} ratingValue={rating} />
      
    </>
  );
}

const CustomerAccount = () => {
  const [bookingInfo, setBookingInfo] = useState(null);
  const [properties, setProperties] = useState({});
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserBookingInfo = async () => {
      const user = auth.currentUser;
      if (user) {
        const bookingRef = doc(db, 'bookings', user.uid);
        try {
          const docSnap = await getDoc(bookingRef);
          if (docSnap.exists()) {
            const bookingsData = docSnap.data();
            setBookingInfo(bookingsData);
            // Fetch property details for each booking
            fetchProperties(bookingsData.timeshares);
          } else {
            console.log("No such booking info!");
          }
        } catch (error) {
          console.error("Error fetching booking info: ", error);
        }
      }
    };

    fetchUserBookingInfo();
  }, [auth, db]);

  const fetchProperties = async (timeshares) => {
    const propertiesPromises = Object.keys(timeshares).map(async (timeshareId) => {
      const response = await fetch(`https://swp-timeshare-back.vercel.app/api/property?id=${timeshareId}`);
      const data = await response.json();
      return { [timeshareId]: data };
    });

    const propertiesResults = await Promise.all(propertiesPromises);
    const propertiesObj = propertiesResults.reduce((acc, current) => ({ ...acc, ...current }), {});
    setProperties(propertiesObj);
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <div className="bookings">
          <h2>Your Bookings</h2>
          {bookingInfo ? (
            <div>
              {Object.entries(bookingInfo.timeshares).map(([timeshareId, details]) => (
                <div key={timeshareId} className='booking'>
                  <h3>{properties[timeshareId]?.name}</h3>
                  <div className="container-two">
                    <div className="container-img">
                      <img className="img" src={properties[timeshareId]?.img} alt={properties[timeshareId]?.name} />
                    </div>
                    <div>
                      <div className="dates">
                        <p>Check In: {details.startDate?.toDate().toLocaleDateString()}</p>
                        <p>Check Out: {details.endDate?.toDate().toLocaleDateString()}</p>
                      </div>
                      <div>
                        <Stars/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default CustomerAccount;
