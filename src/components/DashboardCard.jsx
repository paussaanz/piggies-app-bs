import { useEffect, useState } from "react";
import { getUnacceptedForms, acceptForm } from "../services/FormService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import AlertDialog from "./AlertDialog";
import Button from './Button'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const DashboardCard = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        getUnacceptedForms().then(unacceptedForms => {
            setForms(unacceptedForms);
        });
    }, []);
    //COMM: Por qué si pongo forms como dependencia en el array no para de hacer peticiones constantemente?
    // COMM: Esto me gustaría sacarlo de aquí
    const handleAccept = (formId) => {
        acceptForm(formId)
            .then(() => {
                setForms(forms.filter(form => form._id !== formId));
                window.location.reload()
            });
    };

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="dashboard-swiper pb-5"
                onSwiper={(swiper) => console.log(swiper)}
            >
                {forms.map((form, index) => (
                    <SwiperSlide className="h-100">
                        <div key={index} className="card mb-3 rounded-4 bg-secondary h-100">
                            <div className="card-body h-100">
                                <h5 className="h4 weight-regular">{form.name}</h5>
                                <p className="card-text">{form.message}</p>
                                <p className="card-text">{form.email}</p>
                                <p className="d-inline-block bg-cream px-4 py-1 rounded-5 text-black">{form.phone}</p>
                            </div>
                            <AlertDialog title="Are you sure you want to accept?"
                                trigger={<Button>Accept</Button>}
                                bg_color="cream"
                                accept={<Button color="primary" onClick={() => handleAccept(form._id)}>Accept request</Button>}
                                cancel={<Button>Cancel</Button>}
                                padding="p-4"
                            >
                                If you accept this request, the client will be sent an email.
                            </AlertDialog>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </>
    );
};

export default DashboardCard;



