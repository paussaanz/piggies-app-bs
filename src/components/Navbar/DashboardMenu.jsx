import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import { logout } from "../../stores/AccessTokenStore";
import { useState } from "react";

const DashboardMenu = () => {
    const [activeTab, setActiveTab] = useState(0); // Cambiado de 0 a null para manejar la no selección inicial

    const menuItems = [
        { to: "/dashboard", icon: <LuLayoutDashboard />, text: "Dashboard" },
        { to: "/messages", icon: <AiOutlineMessage />, text: "Messages" },
        { to: "/projects-management", icon: <FaRegSquareCheck />, text: "Projects" },
        { to: "/schedule", icon: <FiCalendar />, text: "Schedule" },
        { to: "/profile", icon: <BsPersonCircle />, text: "Profile" },
    ];


    return (
        <div className="border-end">
            <div className="col-2 d-flex d-inline-block dashboard-menu border-end">
                <Link to="/">
                    <img className="nav-logo" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709386605/Piggies/piggies-logo_fovqzf.png" alt="Brand logo" />
                </Link>
                <ul className="list-unstyled ">
                    {menuItems.map((item, index) => (
                        <Link to={item.to} className=" text-decoration-none">
                            <li
                                key={item.text}
                                className="nav-item py-2 d-flex align-items-center btn-link text-black text-decoration-none"
                                onClick={() => setActiveTab(index)}
                            >
                                <div className="me-2" style={{ verticalAlign: 'text-bottom', color: activeTab === index ? 'var(--bs-primary)' : 'inherit' }}>
                                    <IconContext.Provider value={{ className: `${activeTab === index ? 'text-primary' : 'text-black'}` }}>
                                        {item.icon}
                                    </IconContext.Provider>
                                </div>
                                <span style={{ color: activeTab === index ? 'var(--bs-primary)' : 'inherit' }}>{item.text}</span>
                            </li>
                        </Link>
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