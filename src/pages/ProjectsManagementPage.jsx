import { useEffect, useState } from "react";
import { getAllForms } from "../services/FormService";
import ProjectManageCard from "../components/ProjectManageCard";
import { useLocation } from "react-router-dom";
import Tabbar from "../components/Tabbar";

const ProjectsManagementPage = () => {
    const [forms, setForms] = useState([]);
    const [activeTab, setActiveTab] = useState('All Forms'); 
    const location = useLocation();
    const currentPage = location.pathname;

    const fetchForms = () => {
        getAllForms(true)
            .then(allForms => {
                let filteredForms;
                if (activeTab === 'All Forms') {
                    filteredForms = allForms;
                } else if (activeTab === 'Pending') {
                    filteredForms = allForms.filter(form => !form.completed);
                } else if (activeTab === 'Done') {
                    filteredForms = allForms.filter(form => form.completed);
                }
        
                setForms(filteredForms);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
    
    useEffect(() => {
        fetchForms()
    }, [activeTab])


    return (

        <div className="container-fluid">
            <div className="row justify-content-center pe-5">
                <div className="col-2"></div>
            <div className="col-10 ps-5">
                <Tabbar
                    currentPage={currentPage}
                    forms={forms}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    getTasks={fetchForms} 
                />
                </div>
                <div className="col-2">
                </div>
                
            </div>
        </div>
    );
};

export default ProjectsManagementPage;