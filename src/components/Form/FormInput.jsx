const FormInput = ({ value, onChange, name, placeholder, type, error, onBlur, extraClassName }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`form-control ${extraClassName}`}
                placeholder={placeholder}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" />
            {error && <div className="mt-2 text-primary">{error}</div>}
        </div>

    );
};

export default FormInput;