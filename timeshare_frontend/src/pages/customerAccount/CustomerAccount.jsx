import React, { useState, useEffect } from 'react';
import "./customerAccount.css";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeshares from './customerTimeshares/CustomerTimeshares';
import EditProfile from './editProfile/EditProfile';

const CustomerAccount = () => {
  const [selectedComponent, setSelectedComponent] = useState('timeshares');

  const handleSidebarItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div>
          <Sidebar className="sidebar" onSidebarItemClick={handleSidebarItemClick}/>
        </div>
        <div>
          {selectedComponent === 'timeshares' && <Timeshares />}
          {selectedComponent === 'edit-profile' && <EditProfile />}
        </div>
      </div>
    </div>
  );
};

export default CustomerAccount;
