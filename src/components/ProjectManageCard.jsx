import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Pagination, Navigation, Grid } from 'swiper/modules';
import FormControl from "./Form/FormControl";
import FormInput from "./Form/FormInput";
import AlertDialog from "./AlertDialog";
import { useState } from "react";
import { editTaskService } from "../services/TaskService";
import FormOptions from "./Form/FormOptions";
import EmailMessage from "./EmailMessage";
import { completeForm, contactClientService } from "../services/FormService";


const ProjectManageCard = ({ forms, getTasks }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [showMarkAsCompleted, setShowMarkAsCompleted] = useState(false)
    const [editingTask, setEditingTask] = useState(null)
    const [selectedTask, setSelectedTask] = useState(null)
    const [selectedForm, setSelectedForm] = useState(null);
    const [message, setMessage] = useState('');

    // const sortedForms = [...forms.filter(form => !form.completed), ...forms.filter(form => form.completed)];
    const filteredForms = forms.filter(form => !form.completed);

    const handleEditingTask = (e) => {
        const isCheckBox = e.target.name === 'status'
        const value = e.target.value;

        setEditingTask((prevTask) => ({
            ...prevTask,
            [e.target.name]: isCheckBox ? value === "true" ? false : true : value,
        }))
    }

    const editTask = () => {
        editTaskService(editingTask._id, editingTask)
            .then((task) => {
                getTasks()
                setShowEdit(false);
                setSelectedTask(null)
            })
    }

    const handleMessageSent = (message) => {
        console.log("El mensaje enviado desde EmailMessage:", message);
    };

    const handleCompleteForm = () => {
        completeForm(selectedForm)
            .then(() => {
                getTasks()
                setShowMarkAsCompleted(false)
                setSelectedForm(null)
            });
    };

    return (
        <>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                    fill: 'row',
                }}
                spaceBetween={30}

                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                style={{
                    "--swiper-pagination-color": "#FA6900",
                    "--swiper-pagination-bullet-inactive-color": "#696969",
                }}
                className="mb-5"
            >
                {filteredForms.map((form) => (
                    <SwiperSlide className="h-100 " key={form._id}>
                        <div className="card rounded-4 bg-secondary h-100">
                            <div className="card-title">
                                <h5 className="h4 weight-regular text-center border-bottom border-black border-3 p-4">{form.name}</h5>
                            </div>
                            <div className="card-body py-1" style={{ overflowY: 'auto', maxHeight: '300px', minHeight: '300px' }}>
                                {form.tasks.map((task) => (
                                    <div key={task._id} className="py-1">
                                        <div className="row bg-black text-secondary p-4 rounded-5 ">
                                            <div className="col">
                                                <h4 className="tag text-capitalize">{task.name}</h4>
                                            </div>
                                            <div className="col-auto p-0 icons-secondary icons-small">
                                                <Button
                                                    extraClassName="icon-edit p-0"
                                                    onClick={() => {
                                                        setEditingTask(task)
                                                        setSelectedTask(task)
                                                        setShowEdit(true)
                                                    }}>
                                                </Button>
                                            </div>

                                            <div className="col-12">
                                                <p className="d-inline-block border border-2 border-secondary rounded-pill p1 px-2 text-capitalize">
                                                    {task.serviceId?.name}
                                                </p>
                                            </div>

                                            {task.userId.map((user) => (
                                                <div className="col-auto" key={user._id}>
                                                    <p className="weight-regular">@{user.username}</p>
                                                </div>
                                            ))}
                                            <div className="card-tile h-100">
                                                <p className="text-capitalize m-0 weight-semi-light">
                                                    <span className="weight-regular">Status</span> - {task.status ? 'done' : 'pending'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center py-3 ">
                                <Button
                                    type="submit"
                                    outline="primary"
                                    extraClassName="px-5 py-3"
                                    onClick={() => {
                                        setShowEmailForm(true)
                                        setSelectedForm(form.id)
                                    }}
                                >
                                    Contact the client
                                </Button>
                            </div>
                            <div className="text-center pb-5">
                                <Button
                                    type="submit"
                                    color="primary"
                                    extraClassName="px-5 py-3"
                                    onClick={() => {
                                        setSelectedForm(form.id)
                                        setShowMarkAsCompleted(true)
                                    }}>
                                    Mark as finished
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >

            {showEdit && <AlertDialog
                bg_color="cream"
                body_weight="semi-bold"
                title="Edit the task"
                body={
                    <form key={editingTask._id}>
                        <FormControl
                            text="Task name"
                            htmlFor="name"
                        >
                            <FormInput
                                id="taskName"
                                name="name"
                                type="text"
                                onChange={handleEditingTask}
                                value={editingTask.name}
                            />
                        </FormControl>
                        <FormControl
                            text="Task status"
                            htmlFor="status"
                        >
                            <FormOptions
                                checked={editingTask.status}
                                className="p-0 m-0"
                                id="taskStatus"
                                name="status"
                                type="checkbox"
                                title={editingTask.status ? "DONE" : "PENDING"}
                                onChange={handleEditingTask}
                                value={editingTask.status}
                            />
                        </FormControl>
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
            />
            }

            {
                showEmailForm && <AlertDialog
                    bg_color="cream"
                    body_weight="semi-bold"
                    title="Contact the client"
                    body={<EmailMessage message={message} setMessage={setMessage} onMessageSent={handleMessageSent} />}
                    cancelButton={{
                        text: "CLOSE",
                        onClick: () => {
                            setShowEmailForm(false)
                        },
                        type: "submit"
                    }}
                    acceptButton={{
                        text: "ACCEPT",
                        onClick: () => {
                            if (!selectedForm || !message) {
                                alert('Please select a form and write a message.');
                                return;
                            }

                            contactClientService(selectedForm, { message })
                                .then(() => {
                                    setShowEmailForm(false);
                                    setMessage('');
                                })
                                .catch((error) => {
                                    console.error('Error sending message:', error);
                                });
                        },
                        type: "submit"
                    }}
                />
            }
            {
                showMarkAsCompleted && <AlertDialog
                    bg_color="cream"
                    body_weight="semi-bold"
                    title="Mark project as finished"
                    body={"Are you sure this project is 100% completed?"}
                    cancelButton={{
                        text: "CLOSE",
                        onClick: () => {
                            setShowMarkAsCompleted(false)
                        },
                        type: "submit"
                    }}
                    acceptButton={{
                        text: "ACCEPT",
                        onClick: () => {
                            handleCompleteForm()
                        }
                        ,
                        type: "submit"
                    }}
                />
            }
        </>
    );
};

export default ProjectManageCard;
