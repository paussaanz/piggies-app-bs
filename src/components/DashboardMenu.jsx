import { Link } from "react-router-dom";

const DashboardMenu = () => {
    return (
        <div className="">
            <div className="col-2">
                <ul className="list-unstyled ">
                    <li className="nav-item">
                        <Link to="/dashboard" className="btn-link text-black text-decoration-none">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/messages" className="btn-link text-black text-decoration-none">
                            Messages
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="btn-link text-black text-decoration-none">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/schedule" className="btn-link text-black text-decoration-none">
                            Schedule
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/settings" className="btn-link text-black text-decoration-none">
                            Settings
                        </Link>
                    </li>

                </ul>
                <ul className="list-unstyled ">
                <li className="nav-item">
                        <Link to="/logout" className="btn-link text-black text-decoration-none">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default DashboardMenu;