import DashboardCard from "../components/DashboardCard";
import DashboardMenu from "../components/DashboardMenu";

const DashboardPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <DashboardMenu />
                </div>
                <div className="col-10 pt-5">
                    <h2 className="h4 weight-bold">Welcome, User</h2>
                    <h4 className="fs-6 weight-regular pt-4">New requests</h4>
                    <div className="row justify-content-between pe-5">
                        <div className="col-4 py-2">
                            <DashboardCard title="Request 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </div>
                        <div className="col-4 py-2">
                            <DashboardCard title="Request 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </div><div className="col-4 py-2">
                            <DashboardCard title="Request 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;