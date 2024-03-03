import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { getServices } from "../services/FormService";

const homePage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices().then(services => {
            setServices(services);
        });
    }, []);

    return (
        <div>
            <section className="hero py-5">
                <img src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709386605/Piggies/piggies-logo_fovqzf.png" alt="Card image cap" width="100%" />
                <img className="pt-1" src="./../src/assets/dist/img/hero-image.jpg" alt="Card image cap" height="540px" width="100%" />
            </section>
            <section className="container services py-5">
                <h2 className="col-11 h2 text-black weight-black">SUPER TALENTED AT UNLEASHING BRANDS, PIGGIES: WHERE YOUR VISION GETS WINGS!</h2>
                <div className="row">
                    <div className="col-6 pt-5 pe-5">
                        <p className="text-black fs-md-5">Welcome to Piggies, the vibrant heart of creativity where your brand’s story is our masterpiece! Here, we believe in the power of 'extraordinary' – where every pixel, every line, and every word is a part of a larger, more spectacular picture. Picture this: a world where your brand doesn’t just exist but thrives and captivates.</p>
                        <p className="text-black pt-2 fs-md-5">At Piggies, we’re not just about creating pretty designs or hopping on the latest trends. Oh no, we’re about crafting a legacy, your legacy, with a pinch of our Piggies’ magic! From mastering the art of media planning to securing those prime advertising spots, our team of creative wizards and strategy maestros are here to take your brand from ‘just another name’ to ‘the name’ on everyone’s lips.</p>
                    </div>
                    <div className="col-6 pt-4">
                        {services.map ((service) => (
                            <ServiceCard service={service.name} number={service.number} imgUrl={service.imgUrl} />
                        ))}
                    </div>
                </div>
                <div className="col-12 border-bottom pt-5">
                    <Link to="/services" className="text-decoration-none">
                        <div className="row">
                            <h4 className="col h5 text-black weight-semi-light">OUR SERVICES</h4>
                            <Link to="/services" className="col-auto">
                                <Button outline="primary">
                                    <img src="./../src/assets/dist/img/arrow.svg"/>
                                </Button>
                            </Link>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="container projects pb-5">
                <h4 className="col text-black h5 weight-semi-light">PROJECTS</h4>
                <Carrusel />
            </section>
            < section className="bg-black p-5">
                <div className="container about">
                    <div className="text-cream">
                        <div className="row d-inline-flex justify-content-between pt-5">
                            <h4 className="col-auto h5 weight-semi-light mt-2">WHO ARE WE</h4>
                            <h3 className="h3 weight-semi-bold text-end col-9">
                                PIGGIES IS A COMMUNICATION FIRM ESTABLISHED ON THE FOUNDATION OF TEAMWORK. WE ARE DRAWN TO METICULOUSLY CRAFTED DESIGN AND MOVEMENT.
                            </h3>
                        </div>
                        <p className="pt-4 col-7 offset-md-5 fs-md-5">
                            At Piggies, we don't just communicate; we connect. We understand the power of a story well told, and our designs speak volumes, engaging audiences with their elegance and simplicity. Whether it's branding, digital marketing, or multimedia production, our work is always ahead of the curve, blending cutting-edge technology with compelling narratives. Our approach is holistic; we delve deep into understanding our clients' visions, their brand essence, and their audience. This depth of understanding translates into communication strategies that resonate, inspire, and endure.
                        </p>
                    </div>
                </div>
            </section>
            <section className="container pt-5">
                <Footer />
            </section>
        </div>
    );
};

export default homePage;