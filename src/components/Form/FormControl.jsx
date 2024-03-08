const FormControl = ({ children, text, htmlFor, error, id}) => {
    return (
      <div className="FormControl mb-3" id={id}>
        <label htmlFor={htmlFor} className="form-label">
          {text}
        </label>
        {children}
        <div className="invalid-feedback">{error}</div>
      </div>
    );
  };
  
  export default FormControl;