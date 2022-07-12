import { Box, Container, Grid } from '@mui/material';
import React from 'react'
import { Helmet } from 'react-helmet';
import Check from './images/preview.gif';
import { BlueBtn, SectionalHeading } from '../../Components/Components'
import './sass/ThankYou.css';

const ThankYou = () => {
    return (
        <>
            <Helmet>
                <meta name="title" content="Thank you page" />
                {/* <meta name="description" content="" /> */}
                <title>Thank you page</title>
            </Helmet>
            <Container maxWidth="xxl" style={{ height: "90vh" }}>
                <Grid container style={{ height: "inherit" }} >
                    <Grid item xs={11} md={10} className="mx-auto d-flex justify-content-center align-items-center" style={{ height: "inherit" }} >
                        <Box pt={10}>
                            <Box pt={10} className='text-center'>
                                <img src={Check} alt="success" style={{ maxWidth: "60%" }} loading="lazy" />
                            </Box>
                            <Box className='text-center' >
                                <SectionalHeading title={'Thank You'} type="h1" color1={'var(--blue)'} />
                                <SectionalHeading title={'You will receive a call soon.'} type="h3" color1={'var(--blue)'} />
                                <BlueBtn title={`Continue To Home Page`} link="/" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ThankYou