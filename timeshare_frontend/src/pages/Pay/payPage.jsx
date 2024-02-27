import React, { useState } from 'react';
import "./payPage.css";

const PaymentPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the payment details to a server for processing
    // and handle the response accordingly.
    // For demonstration purposes, let's assume the payment is successful.
    setPaymentStatus('Payment successful!');
  };

  return (
    <div class="container">

      <h2>Let's Make Payment</h2>
      <p >Input your card details to make payment.</p>
      <p>You will be redirected to your banks authorization</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Name On Card: </label>
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
      {paymentStatus && <div>{paymentStatus}</div>}
    </div>
  );
};

export default PaymentPage;