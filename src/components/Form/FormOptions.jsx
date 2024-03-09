const FormOptions = ({ number, user, title, value, onChange, name, type, error, checked, extraClassName }) => {
    return (
        <div>
            <div className="row py-5 m-0 border-bottom">
                <div className="col">
                    <div className="row align-items-center">
                        {user && user.imageUrl ? (
                            <img className="col-8 p-0 "src={user.imageUrl} alt={user.username} style={{ width: '50px', height: '50px', borderRadius:"50px", objectFit:"cover" }} />
                        ) : (
                            <p className="text-black h5 col-auto weight-semi-bol m-0">{number}</p>
                        )}
                          {user && user.username ? (
                        <h2 className="col-auto h5 weight-black text-uppercase ms-5 mb-0"> {user.username} </h2>
                        ) : (
                            <h2 className="col-auto h5 weight-black text-uppercase ms-5 mb-0"> {title} </h2>
                            )}
                        <div className="d-flex col justify-content-end">
                            <label className="visually-hidden" htmlFor={name}></label>
                            <input checked={checked} className={`form-check-input ${extraClassName}`} name={name} id={name} type={type} onChange={onChange} value={value} aria-label="Checkbox for following text input" />
                            {error && <div className="mt-2 text-primary">{error}</div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FormOptions;