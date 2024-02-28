import React, { useState } from 'react';
import "./payPage.css";
import Navbar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx'
import Footer from "../../components/Footer.js";
import PaymentSuccessPopup from "../../components/popUp/popUp.jsx"


const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment]= useState(null);
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
  const handlePaymentSelection=(paymentType)=>{
    setSelectedPayment(paymentType);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentStatus('Payment successful!');
  };


  return (

    <div class="body">
      <Navbar/>
      
      <div class="container">
      <h2>Let's Make Payment</h2>
      <p >Input your card details to make payment.</p>
      <p>You will be redirected to your banks authorization</p>
      <form onSubmit={handleSubmit}>
        <div >
          <label> Payment Method:</label>
          <button class="button" onClick={() => handlePaymentSelection('Mastercard')}> Mastercard</button>
          <button class="button"onClick={() => handlePaymentSelection('PayPal')}>PayPal</button>
          <button class="button" onClick={() => handlePaymentSelection('Visa')}>Visa</button>
          
    

            {selectedPayment && (
                <div>
                    {selectedPayment === 'Mastercard' && (
                        <div class="field">
                        <label>Mastercard number:</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentDetails.cardNumber}
                          onChange={handleInputChange}
                          placeholder='XXXX XXXX XXXX 6754'
                        />
                      </div>
                    )}
                    {selectedPayment === 'PayPal' && (
                        <div class="field">
                        <label>PayPal Card number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentDetails.cardNumber}
                          onChange={handleInputChange}
                          placeholder='XXXX XXXX XXXX 6543'
                        />
                      </div>
                    )}
                    {selectedPayment === 'Visa' && (
                        <div class="field">
                        <label>Visa Card number:</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentDetails.cardNumber}
                          onChange={handleInputChange}
                          placeholder='XXXX XXXX XXXX 9865'
                        />
                      </div>
                    )}
                </div>
            )}
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
            placeholder= '$220'
          />
        </div>
        
      </form>
      <div className="App">
      {/* Các thành phần khác trong ứng dụng */}
      <PaymentSuccessPopup />
    </div>
      </div>
    </div>
  );
};

export default PaymentPage;