import ProjectCard from "../components/ProjectCard/ProjectCard";
import Footer from "../components/Footer/Footer";

const ProjectsPage = () => {
    return (
        <div class="container">
            <div className="row py-5">

                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
                <div className="col-4 py-2">
                    <ProjectCard />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;