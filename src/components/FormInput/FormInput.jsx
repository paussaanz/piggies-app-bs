const FormInput = ({ placeholder }) => {
    return (
        <>
            <label className="visually-hidden" htmlFor="">{placeholder}</label>
            <input type="text" name="" class="form-control" placeholder={placeholder} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

        </>

    );
};

export default FormInput;