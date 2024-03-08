import { useEffect, useState } from "react";
import AlertDialog from "./AlertDialog";
import { updateTaskStatus, addUserToTask } from "../services/TaskService";
import { FiEdit2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Button from "./Button";
import FormOptions from "./Form/FormOptions";


const TaskBar = ({ getTasks, name, error, type, tasks, users }) => {
    const [showModal, setShowModal] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null)
    const [selectedUsers, setSelectedUsers] = useState([])

    const updateTask = () => {
        updateTaskStatus(selectedTask)
            .then((task) => {
                getTasks()
                setShowModal(false);
                setSelectedTask(null)
            })
    }

    const editTask = () => {
        editTask(selectedTask)
            .then((task) => {
                getTasks()
                setShowEdit(false);
                setSelectedTask(null)
            })
    }

    const addTask = () => {
        if (selectedTask && selectedUsers.length > 0) {
            selectedUsers.forEach(userId => {
                addUserToTask(userId, selectedTask)
                    .then(() => {
                        console.log(`Tarea asignada exitosamente al usuario ${userId.username}.`);
                    })
                    .catch(error => {
                        console.error("Error al asignar la tarea:", error);
                    });
            });
        }
        setShowUsers(false);
        setSelectedTask(null);
        setSelectedUsers([]);
    }

    return (
        <>
            {tasks.map(task =>

            (

                <div className="container-fluid pe-5 pb-2">
                    <div className="row bg-beige p-4 rounded-3 align-items-center">
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
                                    setSelectedTask(task._id)
                                }}
                            />
                            {error && <div className="mt-2 text-primary">{error}</div>}
                        </form>
                        <div className="col-3">
                            {task.name}
                        </div>
                        <div className="col-8">
                            <div className="row justify-content-end">
                                <div className="col-auto">
                                    {task.userId.map((user) => (
                                        <img className="col-8 p-0 " key={user._id} src={user.imageUrl || "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1709832458/Piggies/yztqzp5dbbm2uecnnl5h.png"} alt={`User ${user.username}`} style={{ width: '34px', height: '34px', borderRadius:"50px", objectFit:"cover"}}/>
                                    ))}
                                </div>
                                <div className="col-auto">
                                    <Button
                                        color="cream"
                                        padding="p-2"
                                        onClick={() => {
                                            setSelectedTask(task._id)
                                            setShowUsers(true)
                                        }}
                                    >
                                        <FaPlus />
                                    </Button>
                                </div>
                                <div className="col-auto">
                                    <Button
                                        outline="primary"
                                        padding="p-2"
                                        onClick={() => {
                                            setSelectedTask(task._id)
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

            {showModal && <AlertDialog
                bg_color="cream"
                body_weight="semi-bold"
                title="Are you sure you want to accept?"
                body="If you accept this request, the client will be sent an email."
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => {
                        setShowModal(false)
                        setSelectedTask(null)
                    },
                    type: "submit"
                }}
                acceptButton={{
                    text: "ACCEPT",
                    onClick: () => {
                        setShowModal(false)
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
                            checked={user.status}
                            user={user}
                            title={user.username}
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
                        console.log(users)
                        setShowUsers(false)
                        setSelectedTask(null)
                        setSelectedUsers([])
                    },
                    type: "submit"
                }}
                acceptButton={{
                    text: "ACCEPT",
                    onClick: () => {
                        addTask()
                        setShowUsers(false);
                        setSelectedTask(null);
                        setSelectedUsers([]);
                    },
                    type: "submit"
                }}
            />}

            {showEdit && <AlertDialog
                bg_color="cream"
                body_weight="semi-bold"
                title="Edit the task"
                body="inputs"
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => {
                        console.log(users)
                        setShowEdit(false)
                        setSelectedTask(null)
                    },
                    type: "submit"
                }}
                acceptButton={{
                    text: "ACCEPT",
                    onClick: () => {
                        () => editTask()
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