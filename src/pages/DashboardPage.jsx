import { useContext, useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import AuthContext from "../contexts/AuthContext";
import Tabbar from "../components/Tabbar";
import { getAllForms } from "../services/FormService";

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('All Tasks');
    const [tasks, setTasks] = useState([])
    const { user } = useContext(AuthContext)

    const getTasks = () => {
        if (activeTab !== "All Tasks") {
          return tasks.filter((task) => {
           if (activeTab === 'Done') {
            return task.status === true
           } else {
            return task.status === false
           }
          })
        } else {
          return tasks
        }
      } 

    const fetchForms = () =>{
        getAllForms(true)
        .then(acceptedForms => {
          setTasks(acceptedForms.reduce((acc, form) => {
            return [...acc, ...form.tasks]  
          }, []))
        })
        .catch(error => {
            console.error("Error:", error);
        });
      }

    useEffect(() => {
        fetchForms()
      }, [activeTab]);


    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-2 position-fied">
                </div>
                <div className="col-10 pt-5 ps-5">
                    <h2 className="h4 weight-bold">Welcome, {user.username}</h2>
                    <h4 className="fs-6 weight-regular pt-4 pb-3">New requests</h4>
                    <div className="row justify-content-between pe-5">
                        <DashboardCard onSubmitCb={fetchForms}/>
                    </div>
                    <Tabbar tasks={getTasks()} activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;