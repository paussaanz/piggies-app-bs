import TaskBar from "./TaskBar";
import { useEffect, useState } from 'react';
import { getTasksByAcceptedForm } from "../services/TaskService";
import { getAcceptedForms } from '../services/FormService';

const AllTasks = ({formId, accepted}) => {
    const [forms, setForms] = useState([]);   
    // const [tasks, setTasks] = useState([]);


    useEffect(() => {
        getAcceptedForms()
            .then(acceptedForms => {
                setForms(acceptedForms); 
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    // useEffect(() => {
    //     if (accepted) {
    //         getTasksByAcceptedForm(formId)
    //             .then(tasksByAcceptedForm => {
    //                 setTasks(tasksByAcceptedForm);
    //             })
    //             .catch(error => {
    //                 console.error("Error al obtener las tareas:", error);
    //             });
    //     }
    // }, [formId, accepted]);

    // if (!accepted) {
    //     return null;
    // }

    return (
        <div className="pb-5">
            <h1>All tasks</h1>
            <div className="d-flex flex-column row-gap-3">
                {forms.map((form, index) => (
                    <TaskBar formId={form._id} 
                    accepted={form.accepted} 
                    type="checkbox"                     
                    value="Marketing"
                    name="service"
                    id="service"/>
                ))}
            </div>
        </div>
    );
};

export default AllTasks;