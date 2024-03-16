import { useState } from 'react';

const AboutPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const info = [
        {
            title: "Lorem ipsum dolor ",
            body: "Lorem ipsum dolor sit amet, sed consectetur adipiscin elit, sed do. Lorem ipsum dolor sit amet, sed consectetur "
        },
        {
            title: "Lorem ipsum dolor ",
            body: "Lorem ipsum dolor sit amet, sed consectetur adipiscin elit, sed do. Lorem ipsum dolor sit amet, sed consectetur "
        },
        {
            title: "Lorem ipsum dolor ",
            body: "Lorem ipsum dolor sit amet, sed consectetur adipiscin elit, sed do. Lorem ipsum dolor sit amet, sed consectetur "
        },
        {
            title: "Lorem ipsum dolor ",
            body: "Lorem ipsum dolor sit amet, sed consectetur adipiscin elit, sed do. Lorem ipsum dolor sit amet, sed consectetur "
        },
        {
            title: "Lorem ipsum dolor ",
            body: "Lorem ipsum dolor sit amet, sed consectetur adipiscin elit, sed do. Lorem ipsum dolor sit amet, sed consectetur "
        },
        {
            title: "Lorem ipsum dolor ",
            body: "Lorem ipsum dolor sit amet, sed consectetur adipiscin elit, sed do. Lorem ipsum dolor sit amet, sed consectetur "
        }
    ]
    const cities = [
        {
            name: "Madrid",
            address: "Lorem ipsum dolor"
        },
        {
            name: "Málaga",
            address: "Lorem ipsum dolor"
        },
        {
            name: "Madrid",
            address: "Lorem ipsum dolor "
        },
        {
            name: "Málaga",
            address: "Lorem ipsum dolor"
        }
    ]
    const teamMembers = [
        {
            name: "Alex Jordan",
            position: "Creative Director",
            img: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1710537641/Piggies/kriaqcsq53omn2kxm65p.jpg"
        },
        {
            name: "Jamie Park",
            position: "Digital Marketing Strategist",
            img: ""
        },
        {
            name: "Taylor Rivera",
            position: "Graphic Designer",
            img: ""
        },
        {
            name: "Casey Lee",
            position: "Public Relations Manager",
            img: ""
        },
        {
            name: "Morgan Ellis",
            position: "Content Writer",
            img: ""
        }
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pt-5">
                    <div className="h1 weight-black">
                        BRIDGING CREATIVITY AND INNOVATION: OUR JOURNEY FROM MADRID'S VIBRANT STREETS TO GLOBAL COMMUNICATION LANDSCAPES
                    </div>
                </div>
                <div className="col-12 offset-8">
                    <img className="img-solapada" style={{ width: '300px', height: '300px', objectFit: 'contain' }} src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1710571466/Recurso_1logo-mio_exwpbu.png" />
                </div>
                <div className="col-12 pb-3">
                    <h2 className="h3 weight-semi-bold text-center">Lorem ipsum dolor sit amet, sed consectetur adipiscin elit, sed do. Lorem ipsum dolor sit amet, sed consectetur</h2>
                </div>
                <div className="row py-5">
                    {info.map((info) => (
                        <div className="col-4 text-center">
                            <h4>{info.title}</h4>
                            <p className="col-10 offset-1">{info.body}</p>
                        </div>
                    ))}
                </div>
                <div className="col-12 py-5">
                    <h4 className="h3 weight-bold">Meet the team</h4>
                    <div className="row" >
                        {teamMembers.map((member) => (
                           <div className="member-container col-3">
                           <div 
                             className="member-card" 
                             style={{ backgroundImage: `url(${member.img})` }}
                           >
                           </div>
                           <div className="member-name btn btn-outline-primary p-2">
                             {member.name}
                           </div>
                         </div>
                         

                        ))}
                    </div>

                </div>

                <div className="col-12 py-5">
                    <h4 className="h3 weight-bold">Where to find us</h4>
                    <div className="row">
                        {cities.map((city) => (
                            <div className="col-3 py-3">
                                <h4 className="h5">{city.name}</h4>
                                <p className="p-0 m-0">{city.address}</p>
                                <p className="p-0 m-0">{city.address}</p>
                                <p className="p-0 m-0">{city.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutPage;