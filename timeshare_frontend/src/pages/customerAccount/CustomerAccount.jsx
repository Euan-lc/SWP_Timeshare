import "./customerAccount.css";
// import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

// import { useEffect, useState } from "react";
// import PropertyCard from '../../components/PropertyCard';
// import Stack from '@mui/material/Stack';

export default function CustomerAccount() {

    // const [properties, setProperties] = useState([]);

    // useEffect(() => {
    // const fetchProperties = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3001/api/property/all?limit=10&offset=10&sort_by=asc:price');
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch properties');
    //     }
    //     const data = await response.json();
    //     setProperties(data);
    //   } catch (error) {
    //     console.error('Error fetching properties:', error);
    //   }
    // };

    // fetchProperties();
    // }, []);

    return (
        <div className="dashboard">
            <div className="dashList">
                <div className="dashListItem active">
                    <IconButton className="dashIcon"><PersonIcon/></IconButton>
                    <span>Personal Details</span>
                </div>
                <div className="dashListItem">
                    <IconButton className="dashIcon"><ChatBubbleIcon color="secondary"/></IconButton>
                    <span>Contact</span>
                </div>
                <div className="dashListItem">
                    <IconButton className="dashIcon"><SettingsIcon color="secondary"/></IconButton>
                    <span>Preferences</span>
                </div>
                <div className="dashListItem">
                    <IconButton className="dashIcon"><SecurityIcon color="secondary"/></IconButton>
                    <span>Security</span>
                </div>
                <div className="dashListItem">
                    <IconButton className="dashIcon"><PaymentIcon color="secondary"/></IconButton>
                    <span>Payment Details</span>
                </div>
                <div className="dashListItem">
                    <IconButton className="dashIcon"><LockIcon color="secondary"/></IconButton>
                    <span>Privacy</span>
                </div>
                <div className="dashListItem">
                    <IconButton className="dashIcon"><NotificationsIcon color="secondary"/></IconButton>
                    <span>Email Notifications</span>
                </div>
            </div>
            <div className="dashContainer">
                <IconButton><PersonIcon color="primary" className="dashContainerIcon"/></IconButton>
                <span>Lastname Example</span>
                <span>Firstname Example</span>
                <span>Username Example</span>
                <span>Birthdate Example</span>
            </div>
        </div>
        // <div>
        //     <h2>List of Properties</h2>
        //         <ul>
        //             {properties.map(property => (
        //                 <li key={property.id}>
        //                     <div>Name: {property.name}</div>
        //                     <div>Location: {property.location}</div>
        //                     <div>Rating: {property.rating}</div>
        //                     <div>Price: {property.price}</div>
        //                 </li>
        //             ))}
        //         </ul>
        // </div>
    )
}