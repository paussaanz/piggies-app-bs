import { Link } from "react-router-dom";

const ProjectCard = (img) => {
    return (
        <div class="row">
            <Link to="/">
            <div className="rounded-4">
                <img className="projects-img" src="./../src/assets/dist/img/project1.jpg" />

            </div>
            </Link>
        </div>
    );
};

export default ProjectCard;