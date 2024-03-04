// Import React và các thư viện cần thiết
import React, { useState } from 'react';
import "./payPage.css";
import Navbar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx'
import Footer from "../../components/Footer.js";
import PaymentSuccessPopup from "../../components/popUp/popUp.jsx"

// Component cho Form 1
const PaymentForm1 = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHostName, setCardHostName] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCardNumberChange = (value) => {
    setCardNumber(value);
    setErrorMsg('');
    // Kiểm tra điều kiện cho số thẻ
    if (value.length !== 16) {
      setErrorMsg('Card number must be 16 digits');
    } else {
      const lastFourDigits = value.slice(-4);
      switch (cardHostName) {
        case 'MasterCard':
          if (lastFourDigits !== '4560') {
            setErrorMsg('The last four numbers of the card must be 4560');
          }
          break;
        case 'PayPal':
          if (lastFourDigits !== '3250') {
            setErrorMsg('The last four numbers of the card must be 3250');
          }
          break;
        case 'Visa':
          if (lastFourDigits !== '3532') {
            setErrorMsg('The last four numbers of the card must be 3532');
          }
          break;
        default:
          break;
      }
    }
  };

  const handlePayment = () => {
    if (!expiry || expiry.length !== 5 || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      setExpiryError('Expiry must be in the format MM/YY');
      return;
    } else {
      setExpiryError('');
    }

    if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
      setCvvError('CVV must have 3 digits');
      return;
    } else {
      setCvvError('');
    }

    // Nếu tất cả điều kiện đều đúng, hiển thị trang popup thành công
    setSuccessPopup(true);
  };

  const handleClosePopup = () => {
    // Đóng trang popup
    setSuccessPopup(false);
  };

  return (
  
    <div class='payment-form'>
      <form>
      <div>
        <h2>Payment Form: </h2>
        <p >Input your card details to make payment.</p>
        <p> You will be redirected to your bank to authorization page.</p>

          <label htmlFor="cardHostName">Card Host Name</label>
          <select
            id="cardHostName"
            value={cardHostName}
            onChange={(e) => setCardHostName(e.target.value)}
          >
            <option value="">Select Card Host</option>
            <option value="MasterCard">MasterCard</option>
            <option value="PayPal">PayPal</option>
            <option value="Visa">Visa</option>
          </select>
        </div>

        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
          />
        </div>
        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        
        <div>
          <label htmlFor="expiry">Expiry (MM/YY)</label>
          <input
            type="text"
            id="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </div>
        {expiryError && <p style={{ color: 'red' }}>{expiryError}</p>}

        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        {cvvError && <p style={{ color: 'red' }}>{cvvError}</p>}

        
        <button type="button" onClick={handlePayment} className='button'>Pay</button>
        {successPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>Payment Successful!</h2>
            <p>Your payment has been processed successfully.</p>
          </div>
        </div>
      )}
      </form>
      
    </div>
  );
};

// Component cho Form 2
const PaymentForm2 = ({ paymentDetails }) => {
  return (
    <div className="payment-details">
      <h2>Payment Details</h2>
      <div>
        <label>Check In:</label>
        <input type="text" value={paymentDetails.checkIn} disabled />
      </div>
      <div>
        <label>Check Out:</label>
        <input type="text" value={paymentDetails.checkOut} disabled />
      </div>
      <div>
        <label>Number of Days:</label>
        <input type="text" value={paymentDetails.numberOfDays} disabled />
      </div>
      <div>
        <label>Number of Guests:</label>
        <input type="text" value={paymentDetails.numberOfGuests} disabled />
      </div>
      <div>
        <label>Total Amount:</label>
        <input type="text" value={paymentDetails.totalAmount} disabled />
      </div>
    </div>
  );
};

// App component
const App = () => {
  // Giả sử bạn có dữ liệu chi tiết thanh toán từ trang trước
  const paymentDetails = {
    checkIn: '2024-03-04',
    checkOut: '2024-03-07',
    numberOfDays: '3',
    numberOfGuests: '10',
    totalAmount: '$20'



    // Thêm các chi tiết khác nếu cần
  };

  return (
    <div>
      <Navbar/>
      <h1>Payment Page</h1>
      <PaymentForm1 />
      <PaymentForm2 paymentDetails={paymentDetails} />
      <Footer/>
    </div>
  );
};

export default App;
