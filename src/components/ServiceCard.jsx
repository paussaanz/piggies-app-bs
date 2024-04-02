const ServiceCard = ({service, number, imgUrl}) => {
    return (
        <div className="row g-5 align-items-center p-4 border-bottom mb-3 mb-sm-0">
                    <div className="col-3">
                        <img className="aspect-services rounded" src={imgUrl} alt={`${service} service`} />
                    </div>
                    <div className="col-9">
                        <div className="row">
                        <p className="col-auto text-black weight-black mt-2">{number}</p>
                        <h3 className="col card-title h5 text-black weight-black text-uppercase">{service}</h3>
                    </div>
                    </div>
                </div>
    );
};

export default ServiceCard;