const TaskBar = ({ checked, name, error, type, onChange, value }) => {
    return (
        <div className="container-fluid pe-5">
            <div className="row bg-beige p-4 rounded-3 ">
                <div className="d-flex col">
                    <label className="visually-hidden" htmlFor={name}></label>
                    <input checked={checked} className="form-check-input bg-beige" name={name} id={name} type={type} onChange={onChange} value={value} aria-label="Checkbox for following text input" />
                    {error && <div className="mt-2 text-primary">{error}</div>}
                </div>
            </div>
        </div>
    );
};

export default TaskBar;