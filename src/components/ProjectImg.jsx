import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectImg = ({ imageUrl, title, description }) => {
  const [style, setStyle] = useState({});

  //COMM: MIRAR ESTO BIEN
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { top, left, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100 - 50;
    const y = ((clientY - top) / height) * 100 - 50;

    setStyle({
      transform: `scale(1.05) translate(${x * 0.35}px, ${y * 0.35}px)`,
      transition: 'transform 0.3s ease'
    });
  };

  return (

    <Link to="/projects/id" className="col-12 col-md-4 project-img-container " onMouseMove={handleMouseMove} onMouseLeave={() => setStyle({})}>
        <div className="image-hover-wrapper rounded-4 overflow-hidden " style={{ transition: 'transform 1s ease' }}>
          <img className="aspect-projects" src={imageUrl} alt="" style={style} />
          <div className="hover-text">
            <h1 className="h2 text-uppercase text-center weight-bold">{title}</h1>
            <p className="tag text-uppercase text-center weight-regular">{description}</p>
          </div>
        </div>
    </Link>
  );
};


export default ProjectImg;