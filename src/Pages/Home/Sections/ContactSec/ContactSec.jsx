import { Container, Grid, Box, Typography } from "@mui/material"
import { BlueBtn, Map, SectionalHeading } from "../../../../Components/Components";
import map from './images/contact.png';
import address from './images/address.png';
import phone from './images/phone.png';
import email from './images/email.png';
import './sass/contact.css'

const ContactSec = () => {
    return (
        <>
            <section id="contactSec">
                <Container maxWidth>
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box mt={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} md={6} className="p-0" id="mapContainer">
                                        <Box pl={3}>
                                            <Map />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} id="contactContainer" className="d-flex flex-column justify-content-center" >
                                        <Box>
                                            <Typography variant="h3">Carrum Downs Dental Group</Typography>
                                            <Box mt={5}>
                                                {
                                                    [
                                                        { id: "contact-1", image: address, title: "Address", text: "The Local Village, 1095 Frankston – Dandenong Rd, Carrum Downs VIC 3201, Australia" }, { id: "contact-2", image: phone, title: "Emergency", text: "<a href='tel:03-9782 1200'>03-9782 1200</a>" }, { id: "contact-3", image: email, title: "Write Us", text: "<a href='mailto:carrumdownsdental@gmail.com'>carrumdownsdental@gmail.com</a>" }
                                                    ].map(item => <Box mb={3}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={2} sm={1}>
                                                                <Box>
                                                                    <img src={item.image} alt={item.title} className="img-fluid" loading="lazy" />
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={10} sm={11}>
                                                                <Typography variant="h4" gutterBottom>{item.title}</Typography>
                                                                <Typography dangerouslySetInnerHTML={{ __html: item.text }} />
                                                            </Grid>
                                                        </Grid>
                                                    </Box>)
                                                }
                                            </Box>
                                            <Box my={3}>
                                                <BlueBtn anchor="https://goo.gl/maps/yV1SSF99M66q48zR7" title="Get Direction" />
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

export default ContactSec