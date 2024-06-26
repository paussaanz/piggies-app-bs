import { useEffect, useState } from "react";
import AlertDialog from "./AlertDialog";
import { updateTaskStatus, addUserToTask, editTaskService } from "../services/TaskService";
import { FiEdit2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Button from "./Button";
import FormOptions from "./Form/FormOptions";
import FormInput from "./Form/FormInput";
import FormControl from "./Form/FormControl";
import { Tooltip } from 'bootstrap';
import { createUserNotifications } from "../services/NotificationService";


const TaskBar = ({ getTasks, name, error, type, tasks, users }) => {
    const [showCompletedTask, setShowCompletedTask] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null)
    const [selectedUsers, setSelectedUsers] = useState([])
    const [editingTask, setEditingTask] = useState(null)


    useEffect(() => {
        // Inicializa todos los tooltips en el documento
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
    }, [users, tasks]);

    const handleEditingTask = (e) => {
        const isCheckBox = e.target.name === 'status'
        const value = e.target.value;

        setEditingTask((prevTask) => ({
            ...prevTask,
            [e.target.name]: isCheckBox ? value === "true" ? false : true : value,
        }))
    }

    const updateTask = () => {
        updateTaskStatus(selectedTask._id)
            .then((task) => {
                console.log("task", task)
                getTasks()
                setShowCompletedTask(false);
                setSelectedTask(null)

                const taskStatus = editingTask.status ? false : true;

                createUserNotifications(editingTask.userId, editingTask._id, 'statusChange', taskStatus)
                    .then()
                    .catch(error => console.error("Error:", error));
            })
            .catch(error => console.error("Error al asignar la tarea:", error));

    }

    const editTask = () => {
        editTaskService(editingTask._id, editingTask)
            .then((task) => {
                getTasks()
                setShowEdit(false);
                setSelectedTask(null)
                /*COMM: NO ENTIENDO POR QUÉ VA AL REVES*/
                const taskStatus = editingTask.status ? true : false;

                createUserNotifications(editingTask.userId, editingTask._id, 'statusChange', taskStatus)
                    .then()
                    .catch(error => console.error("Error:", error));

            })
            .catch(error => console.error("Error al asignar la tarea:", error));

    }

    const addUsersTask = () => {

        const currentTaskUserIds = selectedTask.userId.map(user => user._id.toString());

        const usersToAdd = selectedUsers.filter(id => !currentTaskUserIds.includes(id));
        const usersToRemove = currentTaskUserIds.filter(id => !selectedUsers.includes(id));


        if (selectedTask) {
            addUserToTask(selectedTask._id, selectedUsers)
                .then(() => {
                    setShowUsers(false);
                    setSelectedTask(null);
                    setSelectedUsers([]);
                    getTasks();

                    if (usersToAdd.length > 0) {
                        createUserNotifications(usersToAdd, selectedTask._id, 'add')
                            .then()
                            .catch(error => console.error("Error:", error));
                    }

                    if (usersToRemove.length > 0) {
                        createUserNotifications(usersToRemove, selectedTask._id, 'remove')
                            .then()
                            .catch(error => console.error("Error:", error));
                    }
                })
                .catch(error => console.error("Error al asignar la tarea:", error));
        }
    };


    return (
        <>
            {tasks.map(task =>
            (
                <div className="container-fluid pe-5 pb-2" key={task._id}>
                    <div className="row bg-beige p-4 rounded-3 align-items-center task-bar">
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
                                    setShowCompletedTask(true);
                                    setSelectedTask(task)
                                }}
                            />
                            {error && <div className="mt-2 text-primary">{error}</div>}
                        </form>
                        <div className="col-3">
                            {task.name}
                        </div>
                        <div className="col-8">
                            <div className="row justify-content-end align-items-center ">
                                <div className="col-auto img-container">
                                    {users && task.userId.map((user) => {
                                        return (
                                            <img className="user-img p-0 rounded-circle object-fit-cover " key={user._id} src={user.imageUrl} alt={`User ${user.username}`} data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title={`@${user.username}`} />
                                        )
                                    })}
                                </div>
                                {users && <div className="col-auto">
                                    <Button
                                        color="cream"
                                        padding="p-2"
                                        onClick={() => {
                                            setSelectedTask(task)
                                            setSelectedUsers(task?.userId.map((user) => user._id))
                                            setShowUsers(true)
                                        }}
                                    >
                                        <FaPlus />
                                    </Button>
                                </div>
                                }
                                <div className="col-auto">
                                    <Button
                                        outline="primary"
                                        padding="p-2"
                                        onClick={() => {
                                            setEditingTask(task)
                                            setSelectedTask(task)
                                            setShowEdit(true)
                                        }}>
                                        <FiEdit2 />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {showCompletedTask && <AlertDialog
                bg_color="cream"
                body_weight="semi-bold"
                title="Are you sure you want to mark as completed?"
                body="If you accept this request, this task will be marked as completed."
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => {
                        setShowCompletedTask(false)
                        setSelectedTask(null)
                    },
                    type: "submit"
                }}
                acceptButton={{
                    text: "ACCEPT",
                    onClick: () => {
                        setShowCompletedTask(false)
                        updateTask()
                    },
                    type: "submit"
                }}
            />}

            {showUsers && <AlertDialog
                bg_color="cream"
                body_weight="semi-bold"
                title="Select a user"
                body={users.map((user) => (
                    <form key={user._id}>
                        <FormOptions
                            checked={selectedUsers.includes(user._id)}
                            user={user}
                            value={user._id}
                            extraClassName="form-check-input form-check-input-tick"
                            name="user"
                            id="user"
                            type="checkbox"
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setSelectedUsers(currentUsers => [...currentUsers, e.target.value]);
                                } else {
                                    setSelectedUsers(currentUsers => currentUsers.filter(id => id !== e.target.value));
                                }
                            }} />
                    </form>
                ))}
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => {
                        setShowUsers(false)
                        setSelectedTask(null)
                        setSelectedUsers([])
                    },
                    type: "submit"
                }}
                acceptButton={{
                    text: "ACCEPT",
                    onClick: () => {
                        addUsersTask()
                    },
                    type: "submit"
                }}
            />}

            {showEdit && <AlertDialog
                bg_color="cream"
                body_weight="semi-bold"
                title="Edit the task"
                body={
                    <form action="/tasks" method="POST" enctype="multipart/form-data" key={editingTask._id}>
                        <FormControl
                            text="Task name"
                            htmlFor="name"
                        ></FormControl>
                        <FormInput
                            id="taskName"
                            name="name"
                            type="text"
                            onChange={handleEditingTask}
                            value={editingTask.name}
                        />
                        <FormControl
                            text="Task status"
                            htmlFor="status"
                        ></FormControl>
                        {editingTask.status}
                        <FormOptions
                            checked={editingTask.status}
                            id="taskStatus"
                            name="status"
                            type="checkbox"
                            title={editingTask.status ? "Done" : "Pending"}
                            onChange={handleEditingTask}
                            value={editingTask.status}
                        />
                    </form>
                }
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => {
                        setShowEdit(false)
                        setSelectedTask(null)
                        setEditingTask(null)
                    },
                    type: "submit"
                }}
                acceptButton={{
                    text: "ACCEPT",
                    onClick: () => {
                        editTask()
                        setShowEdit(false)
                        setSelectedTask(null);
                    },
                    type: "submit"
                }}
            />}
        </>

    );
};

export default TaskBar;

