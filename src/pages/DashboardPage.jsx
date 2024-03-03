import { useContext, useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import DashboardMenu from "../components/Navbar/DashboardMenu";
import AuthContext from "../contexts/AuthContext";
import Tabbar from "../components/Tabbar";

const DashboardPage = () => {
    const { user } = useContext(AuthContext)


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <DashboardMenu />
                </div>
                <div className="col-10 pt-5">
                    <h2 className="h4 weight-bold">Welcome, {user.username}</h2>
                    <h4 className="fs-6 weight-regular pt-4 pb-3">New requests</h4>
                    <div className="row justify-content-between pe-5">
                           <DashboardCard />
                    </div>
                    <Tabbar />
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;