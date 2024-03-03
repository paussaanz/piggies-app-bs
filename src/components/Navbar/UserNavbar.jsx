import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaBell } from "react-icons/fa";


const UserNavbar = ({ currentUser }) => {
    return (
        <nav className="navbar navbar-expand-lg py-5 border-bottom">
            <div className="container-fluid">
                <Link to="/">
                    <img className="nav-logo" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709386605/Piggies/piggies-logo_fovqzf.png" alt="Brand logo" />
                </Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center w-100 justify-content-between px-5">
                        <li className="nav-item text-uppercase weight-semi-bold">
                            {location.pathname}
                        </li>
                        <IconContext.Provider value={{ className: "text-black", size: "1.5rem" }}>
                            <li className="nav-item img-fluid ">
                                <FaBell />
                            </li>
                        </IconContext.Provider>

                        {currentUser ? (
                            <li className="nav-item">
                                <img src={currentUser.imageUrl} alt="User profile" style={{ borderRadius: '50%' }} />
                            </li>
                        ) : (
                            null
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;