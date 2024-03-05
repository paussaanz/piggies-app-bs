import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const Carrusel = ({ images }) => {
    return (
        <>
            <Swiper
                slidesPerView={1.2}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper pb-5"
                style={{
                    "--swiper-pagination-color": "#FA6900",
                    "--swiper-pagination-bullet-inactive-color": "#696969",
                  }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="h-100">
                        <div style={{ height: '680px', overflow: 'hidden' }}>
                            <img src={image.src} className="d-block w-100 h-100 rounded-4" alt={image.alt} style={{ objectFit: 'cover' }} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};


export default Carrusel;