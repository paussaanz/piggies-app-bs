const ServicePageCard = ({ number, title, img, p1, p2, categories, children }) => {

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
                    <div className="col-2">
                        <img className="img-thumbnail border-0" src={img} />
                    </div>
                </div>
                <div className="row">
                    <p className="col-4 text-black legend">
                        {p1}
                    </p>
                    <p className="col-4 text-black legend">
                        {p2}
                    </p>
                </div>
                {categories && categories.length > 0 && (
                    <div className="row pb-5">

                        <ul className="col-4 offset-md-8 h5 list-unstyled weight-black pt-4">
                            {categories.map((category, index) => (
                                <li key={category}>{category}</li> // Renderiza cada categoría como un <li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};



export default ServicePageCard;