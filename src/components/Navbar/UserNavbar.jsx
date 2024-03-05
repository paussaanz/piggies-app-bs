import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaBell } from "react-icons/fa";
import { useEffect, useState } from "react";


const UserNavbar = ({ currentUser }) => {
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

    return (
        <nav className={`navbar navbar-expand-lg py-4 border-bottom sticky-top bg-cream ${navbarClass}`}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav align-items-center w-100 justify-content-between px-5">
                        <li className="nav-item text-uppercase weight-semi-bold">
                            {location.pathname}
                        </li>
                        <div className="d-flex align-items-center gap-4">
                            <IconContext.Provider value={{ className: "text-black", size: "1.5rem" }}>
                                <li className="nav-item img-fluid ">
                                    <FaBell />
                                </li>
                            </IconContext.Provider>

                            {currentUser ? (
                                <li className="nav-item">
                                    <img src={currentUser.imageUrl} alt="User profile" style={{ borderRadius: '50%',  width: '35px', height: '35px', objectFit: 'cover' }} />
                                </li>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;