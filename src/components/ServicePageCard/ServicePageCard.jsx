const ServicePageCard = ({ number, title, img, p1, p2 }) => {
    return (
        <div>
            <div className="col border-top py-5">
                <div className="row pt-5 justify-content-between">
                    <div className="col-10">
                        <div className="row">
                            <p className="text-primary h4 col-1 weight-semi-bold mt-3">{number}</p>
                            <h2 className="col h2 weight-black text-uppercase "> {title} </h2>
                        </div>
                    </div>
                    <img className="col-2" src="./../src/assets/dist/img/card_img.png" />
                </div>
                <div className="row">
                    <p className="col-4 text-black fs-md-5">
                        {p1}
                    </p>
                    <p className="col-4 text-black fs-md-5">
                        {p2}
                    </p>
                </div>
                <div className="row pb-5">
                    <ul className="col-4 offset-md-8 h5 list-unstyled weight-black pt-4">
                        <li>
                            Public Relations
                        </li>
                        <li>
                            Press
                        </li>
                        <li>
                            Corporative Comm
                        </li>
                        <li>
                            Corporative Podcasting
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ServicePageCard;