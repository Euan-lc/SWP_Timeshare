import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "./sidebarCustomerStaff/sidebarCustomerStaff";

const CustomerStaff = () => {

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="sidebar-customer-staff">
                    <Sidebar/>
                </div>
                <div className="message-zone">

                </div>
            </div>
        </div>
    );

}

export default CustomerStaff;