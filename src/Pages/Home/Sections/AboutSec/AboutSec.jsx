import { Link } from 'react-router-dom';
import { Container, Box, Grid, Typography } from '@mui/material';
import top from './images/top-01.svg';
import toothBrush from './images/tooth-brush.png';
import './sass/aboutsec.css'

const AboutSec = () => {
    return (
        <>
            <section>
                <Container maxWidth="xxl" className='p-0 pt-5' id="aboutSec">
                    <img src={top} alt="" className='img-fluid img1' loading='lazy' />
                    <Box id="aboutSecContainer" className='mt-md-n1'>
                        <Grid container>
                            <Grid item xs={11} md={10} className="mx-auto">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} lg={6}>
                                        <Box className='imageContainer'>
                                            <img src={toothBrush} alt="" className='img-fluid' loading='lazy' />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6} className="textContainer">
                                        <Box>
                                            <Typography variant='h1' gutterBottom>Welcome to Carrum Downs Dental on Frankston-Dandenong Rd!</Typography>
                                            <Typography variant='h2' gutterBottom>Most Trusted Family Dentist in Carrum Downs</Typography>
                                            <Typography gutterBottom>Our practice provides our patients with comprehensive services under one roof. From <Link to="/dental-implants-procedure/" style={{ color: `var(--blue)` }}>Dental Implants</Link> to Cosmetic Dentistry and <Link to="/service/wisdom-teeth-removal/" style={{ color: `var(--blue)` }}>Wisdom tooth extractions</Link> to Dentures, our clinics wide range of affordable services will put a big smile on your face. We believe in giving our patients a choice in treatment and we will always educate and discuss treatment option with patients before a decision is made.</Typography>
                                            <Typography gutterBottom>Our staff are very friendly and will receive you with a smile and our warm and inviting office will provide you a relaxing experience. Our dentist/staff are very good with children and will do whatever it takes to calm them down and distract them with IPAD while the treatment is performed.</Typography>
                                            <Typography gutterBottom>We accept dental vouchers from the public dental services (Victorian Dental Scheme and <Link to="/service/child-benefit/" style={{ color: `var(--blue)` }}>Child Dental Benefit Schedule</Link>).
                                        Our dentist Speak English, Hindi, Tamil, Arab, Malayalam, and Urdu.</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section >
        </>
    )
}

export default AboutSec