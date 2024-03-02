import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const ProjectsPage = () => {
    return (
        <div className="container">
            <div className="py-5">

                <div className="d-flex py-2">
                    <ProjectCard />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;