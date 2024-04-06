import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../Button";


const UserNavbar = ({ currentUser }) => {
    const [navbarClass, setNavbarClass] = useState('navbar-visible');
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const { theme } = useTheme();

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

    return (
        <nav className={`navbar navbar-expand-lg py-4 border-bottom sticky-top ${theme} ${navbarClass}`}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav align-items-center w-100 justify-content-between px-5">
                        <li className="nav-item text-uppercase weight-semi-bold">
                            {location.pathname}
                        </li>
                        <div className="d-flex align-items-center gap-4">
                            <li className=" nav-item img-fluid icon-bell">
                            </li>
                           
                            <Link to="/profile">
                                {currentUser ? (
                                    <li className="nav-item">
                                        <img src={currentUser.imageUrl} alt="User profile" style={{ borderRadius: '50%', width: '35px', height: '35px', objectFit: 'cover' }} />
                                    </li>
                                ) : (
                                    null
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;