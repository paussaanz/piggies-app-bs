import { useState } from "react";
import AlertDialog from "./AlertDialog";

const TaskBar = ({ name, error, type, tasks }) => {
    const [showModal, setShowModal] = useState(false)

    if (!tasks) return null

    return (
        <>
            {tasks.map(task => (
                <div className="container-fluid pe-5 pb-2">
                    <div className="row bg-beige p-4 rounded-3">
                        <form className="d-flex col-1">
                            <label className="visually-hidden" htmlFor={name}></label>
                            <input
                                disabled={task.status}
                                checked={task.status}
                                className="form-check-input form-check-input-tick bg-beige "
                                name={task.name} id={task.name}
                                type={type}
                                value={task.status}
                                aria-label="Checkbox"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setShowModal(true);
                                }}
                            />
                            {error && <div className="mt-2 text-primary">{error}</div>}
                        </form>
                        <div className="col-3">
                            {task.name}
                        </div>
                        {showModal && <AlertDialog
                            bg_color="cream"
                            body_weight="semi-bold"
                            title="Are you sure you want to accept?"
                            body="If you accept this request, the client will be sent an email."
                            cancelButton={{
                                text: "CLOSE",
                                onClick: () => setShowModal(false),
                                type: "submit" 
                            }}
                            acceptButton={{
                                text: "ACCEPT",
                                onClick: () => {setShowModal(false)},
                                type: "submit"
                            }}
                        />}
                    </div>
                </div>
            ))}
        </>

    );
};

export default TaskBar;