import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { logout } from "../../stores/AccessTokenStore";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const DashboardMenu = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { theme } = useTheme();

    const menuItems = [
        { to: "/dashboard", icon: <LuLayoutDashboard />, text: "Dashboard" },
        { to: "/messages", icon: <AiOutlineMessage />, text: "Messages" },
        { to: "/projects-management", icon: <FaRegSquareCheck />, text: "Projects" },
        { to: "/profile", icon: <BsPersonCircle />, text: "Profile" },
    ];


    return (
        <div className={`border-end ${theme}`}>
            <div className="col-2 d-flex d-inline-block dashboard-menu border-end">
                <Link to="/dashboard">
                    <svg className="nav-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 872.76 104.46">
                        <g>
                            <path className="logo-color" d="M124.08,1.45H0v101.56h40.48v-25.68h83.61c42.22,0,56.88-14.22,56.88-37.86S166.3,1.45,124.08,1.45ZM123.8,50.63H40.48v-22.48h83.32c10.31,0,16.83,3.77,16.83,11.17s-6.52,11.31-16.83,11.31Z" />
                            <rect className="logo-color" x="193.14" y="1.45" width="40.48" height="101.56" />
                            <path class="logo-color" d="M333,26.69c15.38,0,30.32,2.18,41.79,6.82V5.94c-13.64-3.48-32.36-5.94-46.14-5.94-54.85,0-79.07,20.45-79.07,52.23s24.23,52.24,79.07,52.24c15.82,0,42.51-5.09,53.39-10.02v-50.2h-65.43v20.16h25.1v13.06c-3.63.58-6.82.87-9.29.87-26.12,0-41.21-8.55-41.21-26.11s15.67-25.54,41.79-25.54Z"/>
                            <path class="logo-color" d="M475.59,26.69c15.38,0,30.32,2.18,41.79,6.82V5.94c-13.64-3.48-32.36-5.94-46.14-5.94-54.85,0-79.07,20.45-79.07,52.23s24.23,52.24,79.07,52.24c15.82,0,42.51-5.09,53.39-10.02v-50.2h-65.43v20.16h25.1v13.06c-3.63.58-6.82.87-9.29.87-26.12,0-41.21-8.55-41.21-26.11s15.67-25.54,41.79-25.54Z"/>
                            <rect class="logo-color" x="541.13" y="1.45" width="40.48" height="101.56"/>
                            <polygon class="logo-color" points="644.42 63.11 718.99 63.11 718.99 40.19 644.42 40.19 644.42 28.15 728.86 28.15 728.86 1.45 603.94 1.45 603.94 103.01 730.45 103.01 730.45 76.31 644.42 76.31 644.42 63.11"/>
                            <path class="logo-color" d="M810.8,35.83c-17.84-1.16-26.11-1.89-26.11-5.22,0-3.78,11.46-4.93,24.52-4.93,32.06,0,54.26,8.55,54.26,8.55V6.96s-25.39-6.96-53.83-6.96c-36.56,0-67.03,6.96-67.03,33.95s26.55,30.47,61.37,33.08c19.59,1.45,27.42,1.89,27.42,5.66s-9.57,5.37-27.57,5.37c-20.02,0-48.89-6.67-62.09-12.62v29.16c14.94,4.93,45.7,9.87,67.9,9.87,41.5,0,63.11-13.93,63.11-35.7,0-26.26-24.23-30.03-61.96-32.93Z"/>
                        </g>
                    </svg>
                </Link>
                <ul className="list-unstyled ">
                    {menuItems.map((item, index) => (
                        <NavLink to={item.to} className={({ isActive }) => {

                            return "nav-link" + (isActive ? " selected" : "")
                        }
                        }>
                            <li
                                key={item.text}
                                className="nav-item py-2 d-flex align-items-center btn-link text-black text-decoration-none"
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="me-2" style={{ verticalAlign: 'text-bottom' }}>
                                    <IconContext.Provider value={{ className: `nav-item-icon` }}>
                                        {item.icon}
                                    </IconContext.Provider>
                                </div>
                                <span className="nav-item-text">{item.text}</span>
                            </li>
                        </NavLink>
                    ))}
                </ul>
                <ul className="list-unstyled">
                    <li className="nav-item">
                        <button onClick={logout} className="d-flex align-items-center btn-link text-black text-decoration-none">
                            <div className="me-2">
                                <FiLogOut style={{ verticalAlign: 'text-bottom' }} />
                            </div>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default DashboardMenu;