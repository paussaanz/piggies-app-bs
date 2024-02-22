const FormTextArea = ({ placeholder, type, name, value, error, onChange, onBlur }) => {
    return (
        <div>
            <label className="visually-hidden" htmlFor={name}>{placeholder}</label>
            <textarea type={type} rows="10" name={name} id={name} value={value} onChange={onChange} onBlur={onBlur} className="form-control" placeholder={placeholder} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            {error && <div className="mt-2 text-primary">{error}</div>}
        </div>
    );
};

export default FormTextArea;