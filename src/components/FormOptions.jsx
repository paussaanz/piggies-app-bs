const FormOptions = ({ number, title, value, onChange, name, type, error, checked}) => {
    return (
        <div>
            <div className="row py-5 m-0 border-bottom">
                <div className="col">
                    <div className="row">
                        <p className="text-black h5 col-auto weight-semi-bold">{number}</p>
                        <h2 className="col-auto h5 weight-black text-uppercase "> {title} </h2>
                        <div className="d-flex col justify-content-end">
                        <label className="visually-hidden" htmlFor={name}></label>
                            <input checked={checked} className="form-check-input" name={name} id={name} type={type} onChange={onChange} value={value} aria-label="Checkbox for following text input" />
                            {error && <div className="mt-2 text-primary">{error}</div>}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FormOptions;