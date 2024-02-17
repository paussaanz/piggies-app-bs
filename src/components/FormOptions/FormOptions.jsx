const FormOptions = ({ number, title }) => {
    return (
        <div>
            <div className="row py-5 m-0 border-bottom">
                <div className="col">
                    <div className="row">
                        <p className="text-black h5 col-auto weight-semi-bold">{number}</p>
                        <h2 className="col-auto h5 weight-black text-uppercase "> {title} </h2>
                        <div className="d-flex col justify-content-end">
                            <input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FormOptions;