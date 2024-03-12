import { useEffect, useState } from "react";
import { getAllForms } from "../services/FormService";
import ProjectManageCard from "../components/ProjectManageCard";

const ProjectsManagementPage = () => {
    const [forms, setForms] = useState([])

    const fetchForms = () => {
        getAllForms(true)
            .then(acceptedForms => {
                setForms(acceptedForms)
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        fetchForms()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row justify-content-center pe-5">
                <div className="col-2">
                </div>
                <div className="col-10 pt-5 ps-5">
                    <ProjectManageCard form={forms} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsManagementPage;

// {form.tasks.map(task => (
//     <li key={task._id}>{task.name} </li> 
// ))}