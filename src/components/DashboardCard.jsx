import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasksByForm, getTasksByService, getAllTasks } from "../services/TaskService";

const DashboardCard = ({title, description}) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Petición para traerme todos los tasks
        getTasksByForm(formId)
            .then(tasksFromApi => {
                setTasks((prevTasks) => {
                    return [...prevTasks, ...tasksFromApi]
                })

            })
            .catch(err => {
                console.error("Error al obtener las tareas:", err);
            })
    }, [getTasksByForm])

    return (
            <div className="card mb-3 rounded-4 bg-secondary " >
                <div className="card-body">
                    <h5 className="h4 weight-regular">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="d-inline-block bg-cream px-4 py-1 rounded-5 text-black">19 feb 2024</p>
                </div>
            </div>
    );
};

export default DashboardCard;