import Button from "../components/Button";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";

const ProjectDetailPage = () => {
    const images = [
        {
            src: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978972/Piggies/Psd_1.2_t3pqd8.jpg",
            alt: "Future",
        },
        {
            src: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978973/Piggies/63530936d13ee9e14d3f14bf_Rectangle_1836_anerma.webp",
            alt: "Palau",
        },
        {
            src: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978884/Piggies/DashQ-Hero_pjeff3.png",
            alt: "Dash Q",
        },
        {
            src: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978893/Piggies/1_qedfvj.jpg",
            alt: "Venture Capital",
        },
    ];
    return (
        <div>
            <section className="hero">
                <img className="pt-1" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709485587/Piggies/future-header_dtuder.png" alt="Card image cap" height="800px" width="100%" style={{ objectFit: 'cover' }}/>
            </section>
            <section className="container pt-5">
                <div className="row">
                    <Button outline="primary">
                        <img src="./../src/assets/dist/img/arrow.svg" />
                    </Button>
                </div>
                <div className="text-center py-4">
                    <h1 className="h3">Future</h1>
                    <h2 className="h6 col-6 offset-md-3"> A space dedicated to empowering and giving voice to emerging musical artists</h2>
                </div>
            </section>
            <section>
                <img className="pt-1" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709486095/Piggies/banner_iuoab5.png" alt="Card image cap" height="160px" width="100%" style={{ objectFit: 'contain' }}/>
            </section>
            {/* Breadcrumbs? */}
            <section className="container">
                <div className="pt-5">
                    <h3 className="h6">/Preview</h3>
                    <div className="row">
                        <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <img className="pt-1" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709486413/Piggies/image2_wauek8.png" alt="Card image cap" height="450px" width="100%" style={{ objectFit: 'cover' }}/>
                    <div className="row pt-4">
                        <p className="col-6 h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="pt-5">
                    <h3 className="h6">/Strategy</h3>
                    <div className="row py-2">
                        <img className="col-6 pt-1" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709486271/Piggies/foto1_dqwrlt.png" alt="Card image cap" height="400px" width="100%" style={{ objectFit: 'cover' }}/>
                        <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="row pt-4">
                        <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p className="col-6 h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="pt-5">
                    <h3 className="h6 d-flex justify-content-end ">/Creation</h3>
                    <div className="row py-2">
                        <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <Carrusel images={images} />
                </div>
            </section>
            <section className="container py-5">
                <div className="pt-5">
                    <h3 className="h6">/Final</h3>
                    <div className="row">
                        <p className="col-4 offset-md-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="row py-2">
                        <p className="col-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <img className="pt-1 col-4 " src="./../src/assets/dist/img/hero-image.jpg" alt="Card image cap" height="200px" width="100%" />
                    </div>
                </div>
            </section>
            <section className="container py-5">
                <div className="pt-5">

                    <div className="row">
                        <img className="pt-1 col-6 " src="./../src/assets/dist/img/hero-image.jpg" alt="Card image cap" height="400px" width="100%" />
                        <img className="pt-1 col-6 " src="./../src/assets/dist/img/hero-image.jpg" alt="Card image cap" height="400px" width="100%" />
                    </div>
                    <div className="row py-4">
                        <p className="col-6 h5 border-bottom">PREVIOUS PROJECT</p>
                        <p className="col-6 h5 border-bottom"> NEXT PROJECT</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ProjectDetailPage;