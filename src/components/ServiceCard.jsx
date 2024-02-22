const ServiceCard = ({service, number}) => {
    return (
        <div className="row">
            {/* <div className="col-12 mb-3 mb-sm-0">
                <div className="card d-flex flex-row align-items-center p-4 bg-transparent border-0 border-bottom">
                    <div className="">
                        <img className=" services-img rounded" src="../src/assets/hero-image.jpg" alt="Card image cap" />
                    </div>
                    <div className="card-body d-flex flex-row ps-6">
                        <p class="pe-3 primary-color matrice-black mt-2">{number}</p>
                        <h3 className="card-title h3 primary-color matrice-black">{service}</h3>
                    </div>
                </div>
            </div> */}
            <div className="col-12 mb-3 mb-sm-0">
                <div className="row g-5 align-items-center p-4 border-bottom">
                    <div className="col-3">
                        <img className=" services-img rounded" src="./../src/assets/dist/img/hero-image.jpg" alt="Card image cap" />
                    </div>
                    <div className="col-9">
                        <div className="row">
                        <p className="col-auto text-black weight-black mt-2">{number}</p>
                        <h3 className="col card-title h5 text-black weight-black">{service}</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;