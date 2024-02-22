import { Link } from "react-router-dom";

const DashboardCard = ({title, description}) => {
    return (
            <div className="card mb-3 rounded-4 bg-secondary " >
                <div className="card-body">
                    <h5 className="h4 weight-regular">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="d-inline-block bg-cream px-4 py-1 rounded-5 text-black">19 feb 2024</p>
                </div>
            </div>
    );
};

export default DashboardCard;