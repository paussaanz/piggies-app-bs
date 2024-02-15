import ServicePageCard from "../components/ServicePageCard/ServicePageCard";
import Footer from "../components/Footer/Footer";

const ServicesPage = () => {
    return (
        <div class="container pt-5">
            <div className="pb-5">
                <h1 className="text-uppercase display-2 weight-black"> Gauging our excellence <br></br> by your triumphs.</h1>
                <div className="row align-items-center">
                    <div className="col-4 offset-md-1 pt-3">
                        <img src="./../src/assets/img/piggies-icon.png" width="100%" />
                    </div>
                    <div className="col-6 offset-md-1 fs-md-5">
                        Based in Madrid, Piggies has a global impact through its designs and collaborations. Comprised of a vibrant team of designers, artists, and writers, we are committed to collaborating with innovative organizations. Our focus is on crafting tailor-made digital solutions, captivating visual content, and unforgettable brand experiences for clients worldwide
                    </div>
                </div>
            </div>
            <ServicePageCard />

            {/* <Footer/> */}
        </div>
    );
};

export default ServicesPage;