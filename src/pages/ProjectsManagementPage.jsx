import { useEffect, useState } from "react";
import { getAllForms } from "../services/FormService";
import ProjectManageCard from "../components/ProjectManageCard";
import { useLocation } from "react-router-dom";
import Tabbar from "../components/Tabbar";

const ProjectsManagementPage = () => {
    const [forms, setForms] = useState([]);
    const [activeTab, setActiveTab] = useState('All Forms'); // Establecer pestaña activa inicial
    const location = useLocation();
    const currentPage = location.pathname;

    // const fetchForms = () => {
    //     getAllForms(true)
    //         .then(acceptedForms => {
    //             setForms(acceptedForms)
    //         })
    //         .catch(error => {
    //             console.error("Error:", error);
    //         });
    // }
    const fetchForms = () => {
        console.log("Active Tab:", activeTab); // Diagnóstico
        getAllForms(true)
            .then(allForms => {
                console.log("All Forms:", allForms); // Diagnóstico
                let filteredForms;
                if (activeTab === 'All Forms') {
                    filteredForms = allForms;
                } else if (activeTab === 'Pending') {
                    filteredForms = allForms.filter(form => !form.completed);
                } else if (activeTab === 'Done') {
                    filteredForms = allForms.filter(form => form.completed);
                }
        
                console.log("Filtered Forms:", filteredForms); // Diagnóstico
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
        // <div className="container-fluid">
        //     <div className="row justify-content-center pe-5">
        //         {/* <Tabbar
        //             currentPage={currentPage}
        //             forms={forms}
        //             activeTab={activeTab}
        //             setActiveTab={setActiveTab}
        //             getForms={fetchForms} // Asegúrate de implementar y pasar esta función si es necesaria
        //         /> */}
        //         <div className="col-2">
        //         </div>
        //         <div className="col-10 pt-5 ps-5">
        //             <ProjectManageCard forms={forms} getTasks={fetchForms} />
        //         </div>
        //     </div>
        // </div>
        <div className="container-fluid">
            <div className="row justify-content-center pe-5">
                <div className="col-2"></div>
            <div className="col-10 pt-5 ps-5">
                <Tabbar
                    currentPage={currentPage}
                    forms={forms}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    getForms={fetchForms} 
                />
                </div>
                <div className="col-2">
                </div>
                
            </div>
        </div>
    );
};

export default ProjectsManagementPage;