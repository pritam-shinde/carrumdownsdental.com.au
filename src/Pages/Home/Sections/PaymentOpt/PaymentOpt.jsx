import { Container, Grid, Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionalHeading } from "../../../../Components/Components";
import data from './Data/data';
import './sass/paymentOpt.css'
import { useEffect, useState } from "react";

const PaymentOpt = () => {
const [width, setWidth] = useState();

useEffect(()=>{
  setWidth(window.innerWidth)
}, [width])

  return (
    <>
      <section id="paymentOptSec">
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={11} ms={10} className="mx-auto">
              <Box mt={5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} >
                    <Box style={{height:"inherit"}}>
                      <SectionalHeading title="Payment Options"  align1="center" color1="var(--light-green)" />
                      <Box my={6} style={{alignSelf: 'center'}}>
                        <Swiper
                          slidesPerView={width > 992 ? 5 : width > 0 && width < 600 ? 2 :3}
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
                            data.map(item => <SwiperSlide>
                              <img src={item.image} alt="" className="img-fluid" loading="lazy" />
                            </SwiperSlide>)
                          }
                        </Swiper>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default PaymentOpt