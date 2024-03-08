import { IconContext } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareBehance } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiArrowUpRightBold } from "react-icons/pi";


const Footer = () => {
    return (
        <div className="container">
            <h1 className="text-uppercase weight-black col-9 display-2 primary-color pb-2">WE ALWAYS SEEK
                NEW ADVENTURES.<br/>
                <span class="underline-animate pe-4">Let's Talk</span>
                <IconContext.Provider value={{ className: "text-black gap-2", size: "4.5rem"}}>
                <PiArrowUpRightBold/>
                </IconContext.Provider>
                </h1>
            <img className="img-fluid col-3 offset-md-9 py-5" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709386709/Piggies/piggies-icon_sxwwew.png" />
            <div className="row py-5">
                <div className="col-4">
                    <h5 className="text-uppercase text-primary weight-regular fs-md-5"> Contact Info</h5>
                    <div className="pt-2 text-black weight-regular">
                        <p className="mb-0"> piggiescompany@example.com</p>
                        <p> +1 (555) 555-5555</p>
                    </div>
                </div>
                <div className="col-3">
                    <h5 className="text-uppercase text-primary weight-regular fs-md-5"> HQ</h5>
                    <p className="primary-color weight-regular mb-0 pt-2 col-8"> 567 Meadowbrook Avenue, Springland 98765</p>
                </div>
                <div className="col-3">
                    <h5 className="text-uppercase text-primary weight-regular fs-md-5"> FOLLOW US</h5>
                    <div className="row d-flex p-2 ">
                        <IconContext.Provider value={{ className: "text-black", size: "2.5rem"}}>
                            <div className="col-2 p-0">
                                <AiFillInstagram />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "text-black", size: "2.5rem"}}>
                            <div className="col-2 p-0">
                                <FaSquareBehance />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "text-black", size: "2.5rem"}}>
                            <div className="col-2 p-0">
                                <FaTwitter />
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;