import { IconContext } from "react-icons";
import { PiArrowUpRightBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";


const Footer = () => {
    const hiddenPaths = ['/contact', '/dashboard', '/messages', '/profile', '/projects-management', '/profile', '/login', '/register'];
    const location = useLocation();

    if (hiddenPaths.includes(location.pathname)) {
        return (
            null
        );
    }

    return (
        <div className="container py-5">
            <h1 className="text-uppercase weight-black col-9 display-2 primary-color pb-2">WE ALWAYS SEEK
                NEW ADVENTURES.<br />
                <Link to="/contact" className="underline-animation pe-4"> Let's Talk</Link>
                <IconContext.Provider value={{ className: "text-black gap-2", size: "4.5rem" }}>
                    <PiArrowUpRightBold />
                </IconContext.Provider>
            </h1>
            <img className="img-fluid col-3 offset-md-9 py-5" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709386709/Piggies/piggies-icon_sxwwew.png" />
            <div className="row py-5">
                <div className="col-4">
                    <h5 className="text-uppercase text-primary weight-regular legend"> Contact Info</h5>
                    <div className="pt-2 text-black weight-regular">
                        <p className="mb-0"> piggiescompany@example.com</p>
                        <p> +1 (555) 555-5555</p>
                    </div>
                </div>
                <div className="col-3">
                    <h5 className="text-uppercase text-primary weight-regular legend"> HQ</h5>
                    <p className="primary-color weight-regular mb-0 pt-2 col-8"> 567 Meadowbrook Avenue, Springland 98765</p>
                </div>
                <div className="col-3">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="text-uppercase text-primary weight-regular legend"> FOLLOW US</h5>
                        </div>
                        <div className="col-auto p-0 icons-smll icons-black">
                            <Button
                                extraClassName="icon-twitter p-1">
                            </Button>
                        </div>
                        <div className="col-auto p-0 icons-sall icons-black">
                            <Button
                                extraClassName="icon-behance p-1">
                            </Button>
                        </div>
                        <div className="col-auto p-0 icons-sall icons-black">
                            <Button
                                extraClassName="icon-instagram p-1">
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;