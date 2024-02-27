import { Link } from "react-router-dom";

const ProjectCard = (img) => {
    return (
        <div className="row">
            <Link to="/projects/id">
            <div className="rounded-4">
                <img className="projects-img" src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978973/Piggies/63530936d13ee9e14d3f14bf_Rectangle_1836_anerma.webp" />

            </div>
            </Link>
        </div>
    );
};

export default ProjectCard;