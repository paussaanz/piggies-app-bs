import { useState } from "react";
import AlertDialog from "./AlertDialog";
import { updateTaskStatus, addUserToTask, editTaskService } from "../services/TaskService";
import { FiEdit2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Button from "./Button";
import FormOptions from "./Form/FormOptions";
import FormInput from "./Form/FormInput";
import FormControl from "./Form/FormControl";


const TaskBar = ({ getTasks, name, error, type, tasks, users }) => {
    const [showModal, setShowModal] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null)
    const [selectedUsers, setSelectedUsers] = useState([])
    const [editingTask, setEditingTask] = useState(null)

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
                getTasks()
                setShowModal(false);
                setSelectedTask(null)
            })
    }

    const editTask = () => {
        editTaskService(editingTask._id, editingTask)
            .then((task) => {
                getTasks()
                setShowEdit(false);
                setSelectedTask(null)
            })
    }

    const addUsersTask = () => {
        if (selectedTask) {
            addUserToTask(selectedTask._id, selectedUsers)
                .then(() => {
                    setShowUsers(false);
                    setSelectedTask(null);
                    setSelectedUsers([]);
                    getTasks()
                })
                .catch(error => {
                    console.error("Error al asignar la tarea:", error);
                });
        }

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
                                <div className="col-auto">
                                    {users && task.userId.map((user) => {
                                        return (
                                            <img className="col-8 p-0 rounded-circle object-fit-cover " key={user._id} src={user.imageUrl} alt={`User ${user.username}`} style={{ width: '50px', height: '50px'}} />
                                        )
                                    })}
                                </div>
                               {users &&  <div className="col-auto">
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

