import { Container, Typography, Box, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './sass/hero.css'
import { BlueBtn } from '../../../../Components/Components';

const Hero = () => {
  return (
    <>
      <Container maxWidth="xxl" id="hero" className='p-0'>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }} className="slide-text mySwiper"
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {
            [{ id: "slider1", title: "<span>Family Quality</span><br/>Care", para: "Our team of dentist and staff always ensure patients are <br/>treated like family....", link: "/about-us/" }, { id: "slider2", title: "<span>Experienced</span> <br /> Service", para: "Our dentists are fully qualified<br /> and have  years of Experience<br /> in providing quality dental care.", link: "/about-us/" }, { id: "slider3", title: "<span>Child Dental</span><br />Benefit Scheme", para: "Eligible families receive free <br />treatments for up to 1000$. <br />Call us to find out if you are eligible.", link: "/service/child-benefit/" }].map(item => <SwiperSlide className='slide d-flex justify-content-md-start justify-content-center  align-items-center' id={item.id} key={item.id} >
              <Box className='d-block w-100'>
                <Grid container>
                  <Grid item xs={11} md={10} className="mx-auto">
                    <Typography className="slide-title text-md-left text-center" dangerouslySetInnerHTML={{ __html: item.title }} ></Typography>
                    <Typography className="slide-para text-md-left text-center" dangerouslySetInnerHTML={{ __html: item.para }} ></Typography>
                    <BlueBtn title="Read More" link={item.link} />
                  </Grid>
                </Grid>
              </Box>
            </SwiperSlide>)
          }
        </Swiper>
      </Container>
    </>
  )
}

export default Hero