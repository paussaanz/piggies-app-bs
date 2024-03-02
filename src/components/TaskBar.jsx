import { getTasksByAcceptedForm } from "../services/TaskService";
import { useEffect, useState } from 'react';

const TaskBar = ({ formId, accepted, checked, name, error, type, onChange, value }) => {
    const [tasks, setTasks] = useState([]);

    //Tengo que quitar esta lógica de aquí y pasarla a AllTasks
    useEffect(() => {
        if (accepted) {
            getTasksByAcceptedForm(formId)
                .then(tasksByAcceptedForm => {
                    setTasks(tasksByAcceptedForm);
                })
                .catch(error => {
                    console.error("Error al obtener las tareas:", error);
                });
        }
    }, [formId, accepted]);

    if (!accepted) {
        return null;
    }

    return (
        <>
            {tasks.map(task => (
                <div className="container-fluid pe-5">
                    <div className="row bg-beige p-4 rounded-3 ">
                        <div className="d-flex col-1">
                            <label className="visually-hidden" htmlFor={name}></label>
                            <input checked={checked} className="form-check-input bg-beige" name={task.name} id={task.name} type={type} onChange={onChange} value={value} aria-label="Checkbox for following text input" />
                            {error && <div className="mt-2 text-primary">{error}</div>}
                        </div>
                        <div className="col-3">
                            {task.name}
                            ||
                            {task.status}
                            ||
                            {task.serviceId}
                        </div>

                    </div>

                </div>
            ))}
        </>

    );
};

export default TaskBar;