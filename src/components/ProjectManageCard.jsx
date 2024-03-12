import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import FormControl from "./Form/FormControl";
import FormInput from "./Form/FormInput";
import AlertDialog from "./AlertDialog";
import { useState } from "react";
import { editTaskService } from "../services/TaskService";
import FormOptions from "./Form/FormOptions";


const ProjectManageCard = ({ form }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [editingTask, setEditingTask] = useState(null)
    const [selectedTask, setSelectedTask] = useState(null)

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
                // getTasks()
                setShowEdit(false);
                setSelectedTask(null)
            })
    }


    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="dashboard-swiper pb-5 h-100"
                style={{
                    "--swiper-pagination-color": "#FA6900",
                    "--swiper-pagination-bullet-inactive-color": "#696969",
                }}
            >
                {form.map((form) => (
                    <SwiperSlide className="h-100">
                        <div key={form._id} className="card mb-3 rounded-4 bg-secondary h-100">
                            <div className="card-title">
                                <h5 className="h4 weight-regular text-center border-bottom border-black p-4">{form.name}</h5>
                            </div>
                            <div className="card-body py-1" style={{ overflowY: 'auto', maxHeight: '400px' }}>
                                {form.tasks.map((task) => (
                                    <div className="py-1">
                                        <div className="row bg-black text-secondary p-4 rounded-5 ">
                                            <div className="col">
                                                <h4 className="fs-6 text-capitalize">{task.name}</h4>
                                            </div>
                                            <div className="col-auto icons-secondary">
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
                                                <div className="col-auto">
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
                                <Button type="submit" outline="primary">
                                    Contact the client
                                </Button>
                            </div>
                            <div className="text-center pb-4">
                                <Button type="submit" color="primary">
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

export default ProjectManageCard;