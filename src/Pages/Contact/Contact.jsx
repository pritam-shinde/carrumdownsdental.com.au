import React from 'react'
import { ContactDetails, SectionalHeading, SimpleHero } from '../../Components/Components';
import { Container, Grid, Box, Paper,  } from '@mui/material';
import clinic from './Images/new-image-contact.jpg'
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const form = useRef()
  const navigate = useNavigate()
  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4hza4uw', 'template_24cqpl3', form.current, '90AjuEewT0xq4F7nW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();
    navigate('/thank-you/')
  }

  const breadcrumb = [{ id: "contact-1.1", link: null, text: "CONTACT US" }];

  return (
    <>
      <Helmet>
        <meta name="title" content="Contact Dentist in and around Carrum Downs | Walk in @Carrum Downs Clinic" />
        <meta name="description" content="Don’t suffer from a dental problem! Get your dental problem treated by Carrum Downs Dental Group. We’re available at Carrum Downs and nearby localities." />
        <title>Contact Dentist in and around Carrum Downs | Walk in @Carrum Downs Clinic</title>
      </Helmet>
      <SimpleHero pageTitle="Contact" bgImg="http://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/featured_image_shop_six_columns.jpg" breadCrumb={breadcrumb} />
      <main>
        <section>
          <Container maxWidth="xxl" >
            <Grid container>
              <Grid item xs={11} md={10} className="mx-auto" >
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6} lg={4} className="order-lg-0 order-1" >
                      <ContactDetails />
                    </Grid>
                    <Grid item xs={12} md={6} lg={8} className="order-lg-1 order-2" >
                      <Box>
                        <img src={clinic} alt="Carrum Downs Dental Clinic" title="Carrum Downs Dental Clinic" className='img-fluid' loading='lazy' />
                      </Box>
                    </Grid>
                    <Grid item xs={12} className="order-lg-2 order-3" >
                      <Box className='embed-responsive embed-responsive-16by9' >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6280.462306060237!2d145.182101!3d-38.088283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v1655268585980!5m2!1sen!2sin" width="600" height="450" style={{ border: "0", borderRadius:"1.2rem" }} allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="carrum downs dental" ></iframe>
                      </Box>
                    </Grid>
                    <Grid item xs={12} className="order-lg-3 order-0" >
                      <Box mt={3} >
                        <Grid container>
                          <Grid item xs={12} md={8} lg={6} className="mx-auto" >
                            <Box p={5} className="shadow rounded-lg" component={Paper}>
                              <SectionalHeading title="Feedback Form" type={'h2'} align1="center" />
                              <Box mt={3}>
                                <form ref={form} onSubmit={handleSendEmail}>
                                  <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="user_name" className="form-control" required />
                                  </div>
                                  <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="user_email" className="form-control" required />
                                  </div>
                                  <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" rows="4" className="form-control" required />
                                  </div>
                                  <button type="submit" className='customBtn border-0 outline-0'>Send</button>
                                </form>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Contact