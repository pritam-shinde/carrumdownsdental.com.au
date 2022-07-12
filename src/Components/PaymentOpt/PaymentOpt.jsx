import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Data from './Data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionalHeading } from '../Components';
import './sass/PaymentOpt.css';

const PaymentOpt = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])
    return (
        <>
            <Box py={3} className="PaymentOpt">
                <SectionalHeading title="Payment Options" type="h4" align1="center" />
                <Box>
                    <Swiper
                        slidesPerView={width > 992 ? 4 : width > 0 && width < 600 ? 1 : 3}
                        spaceBetween={50}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper px-5"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        loop={true}
                    >
                        {
                            Data.map(item => <SwiperSlide>
                                <img src={item.image} alt="" className="img-fluid" loading="lazy" />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </Box>
            </Box>
        </>
    )
}

export default PaymentOpt