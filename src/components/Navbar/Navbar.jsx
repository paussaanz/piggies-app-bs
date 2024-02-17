import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg p-4">
            <div className="container-fluid">
                <Link to="/">
                    <img class="nav-logo" src="./../src/assets/dist/img/piggies-logo.png" alt="Brand logo" />
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
                            <button type="button" className="nav-item btn btn-outline-primary text-uppercase matrice-extra-bold">
                                Contact
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;