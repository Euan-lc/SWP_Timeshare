import React, { useState } from 'react';
import './popUp.css'; 

function PaymentSuccessPopup() {
  const [isOpen, setIsOpen] = useState(false);

  //Open popup
  const openPopup = () => {
    setIsOpen(true);
  };

  // Close popup
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button class="pay-button" onClick={openPopup}>Pay</button>
      {isOpen && (
        <div className="popup-container">
          <div className="popup">
            <h2>Payment Successfull</h2>
            <p>The payment has been done successfully</p>
            <p>Thanks for being these with us</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentSuccessPopup;