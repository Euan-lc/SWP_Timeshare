// Sidebar.jsx
import React from 'react';
import "./sidebar.css";
import { FaBars, FaPenToSquare } from "react-icons/fa";
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from "react-router-dom";
import { IoMdChatbubbles } from "react-icons/io";

const Sidebar = ({ onSidebarItemClick }) => {
    const menuItem = [
        {
            path: "/account/mytimeshares",
            name: "My Timeshares",
            icon: <FaBars/>,
            component: 'timeshares'
        },
        {
            path: "/account/support",
            name: "Support",
            icon: <IoMdChatbubbles/>,
            component: 'support'
        },
        {
            path: "/account/edit-profile",
            name: "Edit Profile",
            icon: <EditIcon/>,
            component: 'edit-profile'
        },
    ]

    const handleItemClick = (component) => {
        onSidebarItemClick(component);
    };

    return (
        <div className="sidebar">
            <div className="top_section">
                <h1 className="logo">Timeshare</h1>
                <div className="bars">
                    <FaBars/>
                </div>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className={"link" + (index === menuItem.length - 1 ? " last-link" : "")} onClick={() => handleItemClick(item.component)}>
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Sidebar;
