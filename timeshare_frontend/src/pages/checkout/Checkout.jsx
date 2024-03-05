import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import "./checkout.css";

const PaymentPage = () => {
  const location = useLocation();

  const [property] = useState(location.state.property);
  const [timeshareId] = useState(location.state.timeshareId);
  const [date] = useState(location.state.date);
  const [info] = useState(location.state.info);

  const auth = getAuth();
  const db = getFirestore();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    amount: '',
  });
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you would typically send the payment details to a server for processing
    // and handle the response accordingly.
    // For demonstration purposes, let's assume the payment is successful.

    // Call the API to send booking details such as the user's UID/Start and end dates/Number of years/Timeshare ID
    const user = auth.currentUser;
    const uid = user.uid;
    if (user) {
      const bookingRef = doc(db, 'bookings', user.uid); // Using the user's UID as the document ID
      try {
        await setDoc(bookingRef, {
          timeshares: {
            [timeshareId]: {
              startDate: date[0].startDate,
              endDate: date[0].endDate,
            },
          },
        }, { merge: true });

        const formatDateString = (dateObj) => {
          return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
        };

        const startDateString = typeof date[0].startDate === 'string' ? date[0].startDate : formatDateString(date[0].startDate);
        const endDateString = typeof date[0].endDate === 'string' ? date[0].endDate : formatDateString(date[0].endDate);

        const startDay = `${startDateString[1]}-${startDateString[2]}`;
        const endDay = `${endDateString[1]}-${endDateString[2]}`;
        const startYear = startDateString[0];
        const numYears = 20; // default timeshare contract duration
        const apiUrl = `https://swp-timeshare-back.vercel.app/api/property/reserve?timeshareId=${timeshareId}&customerId=${uid}&startDay=${startDay}&endDay=${endDay}&startYear=${startYear}&numYears=${numYears}`;

        const response = await fetch(apiUrl, {
          method: 'POST',
        });

        setPaymentStatus('Payment successful! Your booking has been recorded.');
      } catch (error) {
        console.error("Error recording booking: ", error);
        setPaymentStatus('Payment successful, but failed to record booking. Please contact support.');
      }
    } else {
      setPaymentStatus('Payment successful, but no user logged in. Please contact support.');
    }
  };


  return (
    <div class="container">

      <h2>Let's Make Payment</h2>
      <p>Input your card details to make payment.</p>
      <p>You will be redirected to your banks authorization</p>
      <form onSubmit={handleSubmit}>
        <div class="field">
          <label>Card number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            placeholder='XXXX XXXX XXXX XXXX'
          />
        </div>
        <div class="field">
          <label>Card holder name </label>
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleInputChange}
            placeholder='Mike Augustin'
          />
        </div>
        <div class="field">
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleInputChange}
            placeholder='eg.10/10'
          />
        </div>
        <div class="field">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            placeholder='eg.123'
          />
        </div>
        <div class="field">
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Pay</button>
      </form>
      {paymentStatus && <div>{paymentStatus}</div>}
    </div>
  );
};

export default PaymentPage;