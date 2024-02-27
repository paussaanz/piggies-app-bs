import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ currentUser }) => {
    const location = useLocation();
    const hiddenPaths = ['/dashboard', '/messages'];

    if (hiddenPaths.includes(location.pathname)) {
        return (
            <nav className="navbar navbar-expand-lg py-5 border-bottom">
                <div className="container-fluid">
                    <Link to="/">
                        <img className="nav-logo" src="./../src/assets/dist/img/piggies-logo.png" alt="Brand logo" />
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center w-100 justify-content-between px-5">
                            <li className="nav-item text-uppercase weight-semi-bold">
                                {location.pathname}
                            </li>
                            <li className="nav-item img-fluid ">
                                <img src="./../src/assets/dist/img/bell.png" alt="Brand logo" height="25px" width="100%" />
                            </li>
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
    }

    return (
        <nav className="navbar navbar-expand-lg p-4">
            <div className="container-fluid">
                <Link to="/">
                    <img className="nav-logo" src="./../src/assets/dist/img/piggies-logo.png" alt="Brand logo" />
                </Link>
                <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item text-uppercase">
                            <Link to="/services" className="btn btn-link weight-extra-bold text-black text-decoration-none">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item text-uppercase">
                            <Link to="/projects" className="  btn btn-link weight-extra-bold text-black text-decoration-none">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item text-uppercase">
                            <Link to="/about" className="btn btn-link weight-extra-bold text-black text-decoration-none">
                                About
                            </Link>
                        </li>
                        <Link to="/contact">
                            <Button outline="primary">
                                Contact
                            </Button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;