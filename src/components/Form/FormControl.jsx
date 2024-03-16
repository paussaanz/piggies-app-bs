const FormControl = ({ children, text, htmlFor, error, id}) => {
    return (
      <div className="FormControl mt-4" id={id}>
        <label htmlFor={htmlFor} className="form-label visually-hidden mb-0">
          {text}
        </label>
        {children}
        <div className="invalid-feedback">{error}</div>
      </div>
    );
  };

  
  export default FormControl;