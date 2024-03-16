import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import "./customerTimeshares.css";
import { Rating } from 'react-simple-star-rating';

const CustomerTimeshares = () => {

    const [bookingInfo, setBookingInfo] = useState(null);
    const [loading, setLoading] = useState(true);  // Loading state
    const [properties, setProperties] = useState({});
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0)
    const auth = getAuth();
    const db = getFirestore();

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleRating = (rate) => {
        console.log(rate);
        setRating(rate);
    }

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

    const fetchUserBookingInfo = async (uid) => {
        const bookingRef = doc(db, 'bookings', uid);
        try {
        const docSnap = await getDoc(bookingRef);
        if (docSnap.exists()) {
            const bookingsData = docSnap.data();
            setBookingInfo(bookingsData);
            fetchProperties(bookingsData.timeshares);
        } else {
            console.log("No such booking info!");
        }
        } catch (error) {
        console.error("Error fetching booking info: ", error);
        }
        setLoading(false);  // Set loading to false after fetching data
    };

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            fetchUserBookingInfo(user.uid);
        } else {
            setLoading(false);
        }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    });

    if (loading) {
        return <div>Loading...</div>;  // Display a loading message while waiting for auth state
    }

    const handleSubmit = async (event, timeshareId) => {
        try {
        event.preventDefault();
        console.log("Comment submitted :", comment);
        console.log("TimeshareId :", timeshareId);
        console.log("Rating :", rating);
        setComment('');
        const api = `https://swp-timeshare-back.vercel.app/api/review?id=${timeshareId}&rating=${rating}&comment=${comment}`;

        await fetch(api, { method: 'POST' });
        }
        catch (error) {
        console.log("Error enculard");
        }
    };

    return (
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
                    <div className="dates">
                      <p>Check In: {details.startDate?.toDate().toLocaleDateString()}</p>
                      <p>Check Out: {details.endDate?.toDate().toLocaleDateString()}</p>
                    </div>
                    <div>
                      <div>
                        <p className='review'>Review your trip</p>
                        <Rating onClick={handleRating} ratingValue={rating} />
                      </div>
                      <br></br>
                      <form onSubmit={(e) => handleSubmit(e, timeshareId)}>
                        <textarea
                          value={comment}
                          onChange={handleChange}
                          placeholder="Leave a comment here…"
                          rows={4}
                          cols={50}
                        />
                        <br />
                        <button className="submitBtn" type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
    )
}

export default CustomerTimeshares;