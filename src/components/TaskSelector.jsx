import { useEffect, useState } from "react";
import { getTasksByForm, getTasksByService, getAllTasks } from "../services/TaskService";

const TaskSelector = () => {
        const [tasks, setTasks] = useState([]);

        useEffect(() => {
            // Petición para traerme todos los tasks
            getAllTasks()
                .then(tasksFromApi => {
                    setTasks((prevTasks) => {
                        return [...prevTasks, ...tasksFromApi]
                    })

                })
                .catch(err => {
                    console.error("Error al obtener las tareas:", err);
                })
        }, [])

    return (
        <div>
             <select>
            {tasks.map(task => (
                <option key={task._id} value={task._id}>{task.name}</option>
            ))}
        </select>
        </div>
    );
};

export default TaskSelector;
