import ServicePageCard from "../components/ServicePageCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getServices } from "../services/FormService";

const ServicesPage = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices().then(services => {
            setServices(services);
        });
    }, []);

    return (
        <div className="container pt-5">
            <div className="pb-5">
                <h1 className="text-uppercase display-2 weight-black"> Gauging our excellence <br></br> by your triumphs.</h1>
                <div className="row align-items-center">
                    <div className="col-4 offset-md-1 pt-3">
                        <img src="./../src/assets/dist/img/piggies-icon.png" width="100%" />
                    </div>
                    <div className="col-6 offset-md-1 fs-md-5">
                        Based in Madrid, Piggies has a global impact through its designs and collaborations. 
                        Comprised of a vibrant team of designers, artists, and writers, we are committed to collaborating with innovative organizations. 
                        Our focus is on crafting tailor-made digital solutions, captivating visual content, and unforgettable brand experiences for clients worldwide
                    </div>
                </div>
            </div>
            <div className="py-5 ">
                {services.map((service, index) => (
                    <ServicePageCard
                        key={index}
                        number={service.number}
                        title={service.name}
                        img={service.imgUrl}
                        p1={service.description}
                        p2={service.description}
                        categories={service.categories}
                    />
                ))}

            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;