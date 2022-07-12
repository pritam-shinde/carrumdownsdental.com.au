import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { SectionalHeading } from '../Components';
import About from './images/bolcsessegfog-szuvasodasa-250x240.jpg';

const AboutOurClient = () => {
    const [width, setWidth] = useState();

    useEffect(() => setWidth(window.innerWidth), [width])

    return (
        <>
            <Box>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <SectionalHeading title="About our clinic" type="h3" />
                        <Box className='d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-md-start justify-content-center'>
                            <Box style={{ width: width > 600 ? "50%" : "100%" }}>
                                <img src={About} alt="Scale and Cleaning Treatment" className='img-fluid' loading='lazy' />
                            </Box>
                            <Box style={{ width: width > 600 ? "50%" : "100%" }}>
                                <Typography className="customPara">Our practice provides our patients with comprehensive services under one roof. From Dental Implants to Cosmetic Dentistry and Wisdom tooth extractions to Dentures, our clinics wide range of affordable services will put a big smile On your face.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SectionalHeading title="Our Advantages" type="h3" />
                        <Box mt={3}>
                            <List>
                                {
                                    ["Modern Dentistry", "After Hour Appointments", "Dental Insurance", "Dental Emergency"].map((listItem, index) => <ListItem key={`aboutOurClient${index}`}>
                                        <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--light-green)" }} />
                                        </ListItemIcon>
                                        <ListItemText primary={listItem} />
                                    </ListItem>)
                                }
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AboutOurClient