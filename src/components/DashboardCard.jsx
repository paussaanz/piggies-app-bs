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
    const [filteredForms, setFilteredForms] = useState([])
    const [formToAccept, setFormToAccept] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getAllForms()
            .then(dbForms => {
                const unacceptedForms = dbForms.filter(form => form.accepted === false);
                setForms(unacceptedForms);
                setFilteredForms(unacceptedForms);
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
                    <SwiperSlide key={form._id} className="h-100">
                        <div className="card mb-3 rounded-4 bg-secondary h-100">
                            <div className="card-body h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="h4 weight-regular" style={{ minHeight: '80px' }}>{form.name}</h5>
                                    <p className="card-text">{form.message}</p>
                                    <p className="d-inline-block bg-cream px-4 py-1 rounded-5 text-black w-max">{form.createdAt.slice(0,10)}</p>
                                </div>
                                {/* <Button
                                    outline='black'
                                    extraClassName="w-max float-right align-self-end "
                                    onClick={() => {
                                        setShowModal(true)
                                        setFormToAccept(form._id)
                                    }}>Reject</Button>  */}
                                    <Button
                                    outline='black'
                                    extraClassName="w-max float-right align-self-end "
                                    onClick={() => {
                                        setShowModal(true)
                                        setFormToAccept(form._id)
                                    }}>Accept</Button>
                            </div>
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



