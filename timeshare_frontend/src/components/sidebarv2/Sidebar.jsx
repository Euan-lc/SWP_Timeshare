import "./sidebar.css";

export default function Sidebar() {
    return (
        <body>
            <nav className="sidebar">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src="https://assets-global.website-files.com/64760069e93084646c9ee428/64760069e93084646c9ef2a2_icon_logoipsum-original.svg" alt="" />
                        </span>
                        <div className="text header-text">
                            <span className="name">Timeshare</span>
                            <span className="profession">Admin</span>
                        </div>
                    </div>
                </header>
            </nav>
        </body>
    )
}