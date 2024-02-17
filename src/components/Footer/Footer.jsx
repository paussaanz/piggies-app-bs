import './Footer.css';

const Footer = () => {
    return (
        <div>
            <h1 className="text-uppercase weight-black col-9 display-2 primary-color pb-2">WE ALWAYS SEEK
                NEW ADVENTURES.
                Let’s talk</h1>
                <img className="img-fluid col-3 offset-md-9 py-5" src="./../src/assets/dist/img/piggies-icon.png"/>
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
                </div>
            </div>
        </div>
    );
};

export default Footer;