import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { Link, useLocation, NavLink } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import DashboardMenu from "./DashboardMenu";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const hiddenPaths = ['/dashboard', '/messages', '/profile', '/projects-management'];
    const [navbarClass, setNavbarClass] = useState('navbar-visible');
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const navbarItems = [
        { to: "/services", text: "Services" },
        { to: "/projects", text: "Projects" },
        { to: "/about", text: "About" , extraClassname:"btn btn-link weight-extra-bold text-black text-decoration-none" },
    ];
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
                    <UserNavbar currentUser={user} />
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

                {navbarItems.map((item, index) => (
                    <NavLink to={item.to} className={({ isActive }) => {

                        return "nav-link" + (isActive ? " selected p-0" : " p-0")
                    }
                    }>
                        <li
                            key={item.text}
                            className="nav-item py-2 m-0 d-flex text-uppercase align-items-center btn-link text-black text-decoration-none"
                            onClick={() => setActiveTab(index)}
                        >
                            <span className="nav-item-text btn btn-lnk weight-extra-bold text-decoration-none">{item.text}</span>
                        </li>
                    </NavLink>
                ))}
                        {/* <li className="nav-item text-uppercase">
                            <Link to="/services" className="btn btn-link weight-extra-bold text-black text-decoration-none">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item text-uppercase">
                            <Link to="/projects" className="btn btn-link weight-extra-bold text-black text-decoration-none">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item text-uppercase">
                            <Link to="/about" className="btn btn-link weight-extra-bold text-black text-decoration-none">
                                About
                            </Link>
                        </li> */}
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