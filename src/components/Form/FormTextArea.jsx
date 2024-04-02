const FormTextArea = ({ placeholder, type, name, value, error, onChange, onBlur, onKeyPress, rows, extraClassname }) => {
    return (
        <div>
            <label className="visually-hidden" htmlFor={name}>{placeholder}</label>
            <textarea type={type} rows={rows} name={name} id={name} value={value} onChange={onChange} onBlur={onBlur} onKeyPress={onKeyPress} className={`form-control ${extraClassname}`} placeholder={placeholder} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            {error && <div className="mt-2 text-primary">{error}</div>}
        </div>
    );
};

export default FormTextArea;