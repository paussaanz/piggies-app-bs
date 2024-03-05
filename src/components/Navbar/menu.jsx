import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FiCalendar, FiLogOut } from "react-icons/fi";
import { logout } from "../../stores/AccessTokenStore";

const DashboardMenu = () => {
    const [activeTab, setActiveTab] = useState(null); // Cambiado de 0 a null para manejar la no selección inicial

    const menuItems = [
        { to: "/dashboard", icon: <LuLayoutDashboard />, text: "Dashboard" },
        { to: "/messages", icon: <AiOutlineMessage />, text: "Messages" },
        { to: "/projects", icon: <FaRegSquareCheck />, text: "Projects" },
        { to: "/schedule", icon: <FiCalendar />, text: "Schedule" },
        { to: "/settings", icon: <LuSettings />, text: "Settings" },
    ];

    return (
        <div className="border-end">
            <div className="col-2 d-flex d-inline-block dashboard-menu border-end">
                {/* Logo */}
                <Link to="/">
                    <img className="nav-logo" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709386605/Piggies/piggies-logo_fovqzf.png" alt="Brand logo" />
                </Link>

                {/* Menu Items */}
                <ul className="list-unstyled">
                    <IconContext.Provider value={{ className: "text-black", size: "1rem" }}>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`nav-item py-2 ${activeTab === index ? 'text-orange' : ''}`} // Aplica la clase text-orange si el item está activo
                                onClick={() => setActiveTab(index)} // Actualiza el estado al hacer clic
                            >
                                <Link to={item.to} className="d-flex align-items-center btn-link text-black text-decoration-none">
                                    <div className="me-2" style={{ verticalAlign: 'text-bottom' }}>
                                        {item.icon}
                                    </div>
                                    <span>{item.text}</span>
                                </Link>
                            </li>
                        ))}
                    </IconContext.Provider>
                </ul>

                {/* Logout */}
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
        </div>
    );
};

export default DashboardMenu;
