import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

const DashboardMenu = () => {
    return (
        <div className="">
            <div className="col-2">
                <ul className="list-unstyled ">
                    <IconContext.Provider value={{ className: "text-black", size: "1rem" }}>
                        <li className="nav-item">
                            <Link to="/dashboard" className="d-flex align-items-center btn-link text-black text-decoration-none">
                                <div className="me-2">
                                    <LuLayoutDashboard style={{ verticalAlign: 'text-bottom' }} />
                                </div>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                    </IconContext.Provider>
                    <li className="nav-item">
                        <Link to="/messages" className="d-flex align-items-center btn-link text-black text-decoration-none">
                            <div className="me-2">
                                <AiOutlineMessage style={{ verticalAlign: 'text-bottom' }} />
                            </div>
                            <span>Messages</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="d-flex align-items-center btn-link text-black text-decoration-none">
                            <div className="me-2">
                                <FaRegSquareCheck style={{ verticalAlign: 'text-bottom' }} />
                            </div>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/schedule" className="d-flex align-items-center btn-link text-black text-decoration-none">
                            <div className="me-2">
                                <FiCalendar style={{ verticalAlign: 'text-bottom' }} />
                            </div>
                            <span>Schedule</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/settings" className="d-flex align-items-center btn-link text-black text-decoration-none">
                            <div className="me-2">
                                <LuSettings style={{ verticalAlign: 'text-bottom' }} />
                            </div>
                            <span>Settings</span>
                        </Link>
                    </li>

                </ul>
                <ul className="list-unstyled ">
                    <li className="nav-item">
                        <Link to="/logout" className="d-flex align-items-center btn-link text-black text-decoration-none">
                            <div className="me-2">
                                <FiLogOut style={{ verticalAlign: 'text-bottom' }} />
                            </div>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default DashboardMenu;