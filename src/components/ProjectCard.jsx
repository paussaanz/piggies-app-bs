import { Link } from "react-router-dom";

const ProjectCard = (img) => {
    return (
        <div className="row">
            <Link to="/projects/id">
            <div className="rounded-4">
                <img className="projects-img" src="./../src/assets/dist/img/project1.jpg" />

            </div>
            </Link>
        </div>
    );
};

export default ProjectCard;