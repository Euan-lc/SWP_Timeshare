import React, { useState, useEffect } from 'react';
import "./customerAccount.css";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeshares from './customerTimeshares/CustomerTimeshares';

const CustomerAccount = () => {
  

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div>
          <Sidebar className="sidebar"/>
        </div>
        <div>
          <Timeshares/>
        </div>
      </div>
    </div>
  );
};

export default CustomerAccount;
