import { useState } from "react";
//import "./sidebar.css";
import 'boxicons/css/boxicons.min.css';
import AccountsList from "../../pages/admin/AccountsList";
import CreateAccount from "../../pages/admin/CreateAccount";

export default function Sidebar() {
    const [currentSection, setCurrentSection] = useState("");

    return (
        <div>
        <div className="sidebar-container">
            <nav className="sidebar">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src="https://assets-global.website-files.com/64760069e93084646c9ee428/64760069e93084646c9ef2a2_icon_logoipsum-original.svg" alt="" />
                        </span>
                        <div className="text header-text">
                            <span className="admin-name">Timeshare</span>
                            <span className="admin-profession">Admin</span>
                        </div>
                    </div>
                </header>

                <div class="menu-bar">
                    <div class="menu">
                        <li class="search-box">
                            <i class='bx bx-search icons'></i>
                            <input type="search" placeholder="Search..." />
                        </li>
                        <ul class="menu-links">
                            <li class="nav-link" onClick={() => setCurrentSection("listAccounts")}>
                                <a href="#">
                                    <i class='bx bxs-user-account icons'></i>
                                    <span class="text nav-text">Accounts list</span>
                                </a>
                            </li>
                            <li class="nav-link" onClick={() => setCurrentSection("createAccount")}>
                                <a href="#">
                                    <i class='bx bx-add-to-queue icons'></i>
                                    <span class="text nav-text">Create account</span>
                                </a>
                            </li>
                            <li class="nav-link">
                                <a href="#">
                                    <i class='bx bx-edit-alt icons'></i>
                                    <span class="text nav-text">Edit account</span>
                                </a>
                            </li>
                            <li class="nav-link">
                                <a href="#">
                                    <i class='bx bx-trash icons'></i>
                                    <span class="text nav-text">Delete account</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="bottom-content">
                        <li class="">
                            <a href="#">
                                <i class='bx bx-log-out icons'></i>
                                <span class="text nav-text">Logout</span>
                            </a>
                        </li>
                        <li class="mode">
                            <div class="moon-sun">
                                <i class='bx bx-moon icons moon'></i>
                                <i class='bx bx-sun icons sun'></i>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
        <div className="content">
                {currentSection === "listAccounts" && <AccountsList />}
                {currentSection === "createAccount" && <CreateAccount />}
            </div>
        </div>
    )
}