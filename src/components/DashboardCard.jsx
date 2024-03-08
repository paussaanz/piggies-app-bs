import { useEffect, useState } from "react";
import { acceptForm, getAllForms } from "../services/FormService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import AlertDialog from "./AlertDialog";
import Button from './Button'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const DashboardCard = ({ onSubmitCb }) => {
    const [forms, setForms] = useState([]);
    const [formToAccept, setFormToAccept] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getAllForms()
            .then(dbForms => {
                setForms(dbForms);
            });
    }, []);
    //COMM: Por qué si pongo forms como dependencia en el array no para de hacer peticiones constantemente?
    const handleAccept = () => {
        acceptForm(formToAccept)
            .then(() => {
                setForms(forms.filter(form => form._id !== formToAccept));
                onSubmitCb()
                setShowModal(false)
                setFormToAccept(null)
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
                style={{
                    "--swiper-pagination-color": "#FA6900",
                    "--swiper-pagination-bullet-inactive-color": "#696969",
                }}
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
                            <Button onClick={() => {
                                setShowModal(true)
                                setFormToAccept(form.id)
                            }}>Accept</Button>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
            {showModal && <AlertDialog
                bg_color="cream"
                text_color="black"
                body_weight="semi-bold"
                title="Are you sure you want to accept?"
                body="If you accept this request, the client will be sent an email. "
                cancelButton={{
                    text: "CLOSE",
                    onClick: () => {
                        setShowModal(false)
                        setFormToAccept(null)
                    },
                    type: "submit"
                }}
                acceptButton={{
                    text: "ACCEPT",
                    onClick: () => { handleAccept() },
                    type: "submit"
                }}
            />}
        </>
    );
};

export default DashboardCard;



