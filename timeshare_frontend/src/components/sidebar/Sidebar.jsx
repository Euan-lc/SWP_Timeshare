import "./sidebar.css";
import { FaBars, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdChatbubbles } from "react-icons/io";

const Sidebar = () => {
    const menuItem = [
        {
            path: "/account/mytimeshares",
            name: "My Timeshares",
            icon: <FaBars/>
        },
        {
            path: "/account/reviews",
            name: "Reviews",
            icon: <FaStar/>
        },
        {
            path: "/account/support",
            name: "Support",
            icon: <IoMdChatbubbles/>
        },
    ]

    return (
        <div className="container_sidebar">
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo">Timeshare</h1>
                    <div className="bars">
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;