const TaskBar = ({ checked, name, error, type, onChange, value, tasks }) => {

    if (!tasks) return null
    const handleDone = () => {
        acceptForm(formToAccept)
            .then(() => {
                setForms(forms.filter(form => form._id !== formToAccept));
                onSubmitCb()
                setShowModal(false)
                setFormToAccept(null)
            });
    };

    return (
        <>
            {tasks.map(task => (
                <div className="container-fluid pe-5 pb-2">
                    <div className="row bg-beige p-4 rounded-3">
                        <form className="d-flex col-1">
                            <label className="visually-hidden" htmlFor={name}></label>
                            <input checked={checked} className="form-check-input bg-beige" name={task.name} id={task.name} type={type} onChange={onChange} value={value} aria-label="Checkbox for following text input" />
                            {error && <div className="mt-2 text-primary">{error}</div>}
                        </form>
                        <div className="col-3">
                            {task.name}
                        </div>

                    </div>

                </div>
            ))}
        </>

    );
};

export default TaskBar;