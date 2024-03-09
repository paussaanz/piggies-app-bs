import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import DashboardMenu from "./DashboardMenu";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const hiddenPaths = ['/dashboard', '/messages', '/profile', '/schedule', '/projects-management'];
    const [navbarClass, setNavbarClass] = useState('navbar-visible');
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setNavbarClass('navbar-hidden');
            } else {
                setNavbarClass('navbar-visible');
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);


    if (hiddenPaths.includes(location.pathname)) {
        return (
            <div className="row">
                <div className="col-2">
                    <DashboardMenu />
                </div>
                <div className="col-10">
                    <UserNavbar currentUser={user}/>
                </div>
            </div>
        );
    }

    return (
        <nav className={`navbar navbar-expand-lg p-4 ${navbarClass} bg-cream`}>
            <div className="container-fluid">
                <Link to="/">
                    <img className="nav-logo" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709386605/Piggies/piggies-logo_fovqzf.png" alt="Brand logo" />
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