import { Link } from "react-router-dom";
import ProjectImg from "./ProjectImg";

const PROJECTS_DATA = [
    {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978972/Piggies/Psd_1.2_t3pqd8.jpg",
        title: "Future",
        description: "Design and creativity"
    },
    {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978884/Piggies/DashQ-Hero_pjeff3.png",
        title: "Dash Q",
        description: "Branding and communication"
    },
    {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978893/Piggies/1_qedfvj.jpg",
        title: "Venture",
        description: "Branding and web design"
    },
    {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978934/Piggies/aotm-thumb-1_jriwbd.jpg",
        title: "AOTM",
        description: "Branding and web design"
    },
    {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978908/Piggies/Barrow-Thumb_on8mpl.jpg",
        title: "Barrow Str",
        description: "Branding and communication"
      },
      {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978925/Piggies/6563a956b08c1110d0c1a07d_Frame_8848_szah1r.png",
        title: "Uru",
        description: "Branding and communication"
      },
      {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978949/Piggies/thumb-fountain_2x_dyl4oo.jpg",
        title: "Fountain",
        description: "Branding and communication"
      },
      {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978973/Piggies/63530936d13ee9e14d3f14bf_Rectangle_1836_anerma.webp",
        title: "Palau",
        description: "Branding"
      },
      {
        imageUrl: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1708978957/Piggies/puro.jpg_yhs9kr.webp",
        title: "Puro",
        description: "Social Media"
      },
];

const ProjectCard = () => {
    return (
        <Link to="/projects/id">
            <div className="rounded-4 row row-gap-3 ">
                {PROJECTS_DATA.map((project, index) => (
                    <ProjectImg key={index} imageUrl={project.imageUrl} title={project.title} description={project.description} />
                ))}
            </div>
        </Link>
    );
};

export default ProjectCard;