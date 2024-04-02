const AboutPage = () => {
    const info = [
        {
            title: "Integrity",
            body: " At the core of our operations, integrity represents honesty and transparency in all our actions and decisions. We value the trust our clients, employees, and partners place in us."
        },
        {
            title: "Innovation",
            body: " We strive to be pioneers in our field, constantly seeking new ideas, technologies, and methods that can enhance the quality and efficiency of our products and services. Innovation is not just a goal but a mindset that we cultivate at every level."
        },
        {
            title: "Commitment",
            body: "We are dedicated to excellence in every aspect of our business. From the quality of our products to customer service, every team member strives to surpass standards and deliver exceptional results."
        },
        {
            title: "Responsibility",
            body: "We recognize our responsibility towards the community and the environment. We commit to operating sustainably, minimizing our environmental impact, and making a positive contribution to society. "
        },
        {
            title: "Teamwork",
            body: "We firmly believe that success is best achieved by working together. We foster a collaborative environment where every team member is valued and their opinions heard. By leveraging our diverse skills and perspectives."
        },
        {
            title: "Adaptability",
            body: "In a rapidly changing business world, the ability to adapt is crucial for survival and growth. We strive to be agile and flexible, responding quickly to new opportunities and challenges. "
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
            img: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1710580749/content_enqizs.png"
        },
        {
            name: "Jamie Park",
            position: "Digital Marketing Strategist",
            img: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1710580749/content_2_dsmchy.png"
        },
        {
            name: "Taylor Rivera",
            position: "Graphic Designer",
            img: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1710580749/content_3_ehzzch.png"
        },
        {
            name: "Casey Lee",
            position: "Public Relations Manager",
            img: "https://res.cloudinary.com/dmbtvuj1x/image/upload/v1710580749/content_1_rmbars.png"
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
                    <img className="overlay-image" style={{ width: '300px', height: '300px', objectFit: 'contain' }} src="https://res.cloudinary.com/dmbtvuj1x/image/upload/v1710571466/Recurso_1logo-mio_exwpbu.png" />
                </div>
                <div className="col-12 pb-3">
                    <h2 className="h3 weight-semi-bold text-center">Our company's essence is rooted in a steadfast commitment to integrity, relentless innovation, an unwavering pursuit of excellence. </h2>
                </div>
                <div className="row py-5">
                    {info.map((info) => (
                        <div key={info.title} className="col-4 text-center pt-4">
                            <h4>{info.title}</h4>
                            <p className="col-10 offset-1">{info.body}</p>
                        </div>
                    ))}
                </div>
                <div className="col-12 py-5">
                    <h4 className="h3 weight-bold">Meet the team</h4>
                    <div className="row pt-2" >
                        {teamMembers.map((member) => (
                            <div key={member.name} className="col-3">
                                <div
                                    className="card-member"
                                    style={{ backgroundColor: "grey" }}
                                >
                                </div>
                                <div className="btn btn-outline-primary p-2 w-100">
                                    <p className="p-0 m-0">{member.name}</p>

                                    <p className="p-0 m-0 mt-2 tag ">{member.position}</p>
                                </div>

                            </div>


                        ))}
                    </div>

                </div>

                <div className="col-12 py-5">
                    <h4 className="h3 weight-bold">Where to find us</h4>
                    <div className="row text-center">
                        {cities.map((city, index) => (
                            <div key={index} className="col-3 py-3">
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