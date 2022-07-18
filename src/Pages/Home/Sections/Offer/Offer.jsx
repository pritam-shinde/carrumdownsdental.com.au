import { Container, Grid, Box, Card, CardMedia, CardContent, List, Button, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet';
import { BlueBtn, ListItemComp, SectionalHeading, SimpleHero, TnCLink } from '../../../../Components/Components';
import offer1 from './images/1.jpg'
import offer2 from './images/2.jpg'
import offer3 from './images/3.jpg'


const Offer = () => {
    return (
        <>
            <section className='mb-md-5 mb-4 GreySec py-md-5 py-3'>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Container maxWidth="xxl">
                                <SectionalHeading title="Latest Offer" type="h2" align1={'center'} color1="var(--light-green)" />
                                <Box mt={3}>
                                    <Grid container spacing={3}>
                                        {
                                            [
                                                {
                                                    id: "offer1",
                                                    title: [{ id: "offer1.head1", variant: "h4", text: "*New Patient Offer - Scale & Clean with Full Check-up" }],
                                                    list: [{ id: "offer1-list1", text: " Comprehensive Dental Examination" },
                                                    { id: "offer1-list2", text: "Scale & Clean" },
                                                    { id: "offer1-list3", text: "Fluoride" }],
                                                    price: "$199*",
                                                    para: ["or 4 equal payments of $49.75*"],
                                                    media: offer1,
                                                    paraText: null
                                                },
                                                {
                                                    id: "offer2",
                                                    title: [{ id: "offer2.head1", variant: "h4", text: "Dental Implant (implant, crown and abutment) Offer" }],
                                                    list: [],
                                                    price: "$179*",
                                                    para: ["or 4 equal payments of $44.75* "],
                                                    media: offer2,
                                                    paraText: "At Carrum Down Dental Clinic we use the leading edge implant Kit from MIS Australia for all our Implant treatments."
                                                },
                                                {
                                                    id: "offer3",
                                                    title: [{ id: "offer3.head1", variant: "h4", text: "TakeHome Teeth Whitening Offer" }],
                                                    list: [{ id: "offer3-list1", text: "Whitening Consultation with Dentist" },
                                                    { id: "offer3-list2", text: "Whitening trays made to fit you" },
                                                    { id: "offer3-list3", text: "Whitening Gel and Demonstration of how to use it" }],
                                                    price: "$299*",
                                                    para: ["or 4 equal payments of $74.75* "],
                                                    media: offer3,
                                                    paraText: null
                                                }
                                            ].map(item => <Grid item xs={12} md={6} lg={4}>
                                                <Card className="shadow" >
                                                    <CardMedia component="img" image={item.media} className="img-fluid" />
                                                    <CardContent>
                                                        <Box>
                                                            <SectionalHeading type={item.title[0].variant} title={item.title[0].text} />
                                                        </Box>
                                                        <Box>
                                                            {
                                                                item.paraText !== null ? <Typography className='customPara'>{item.paraText}</Typography> : null
                                                            }
                                                            <List>
                                                                {
                                                                    item.list.map(item => <ListItemComp key={item.id} text={item.text} />)
                                                                }
                                                            </List>
                                                        </Box>
                                                        <Box  style={{marginTop: item.id === "offer2" ? '1.7rem' : item.id === 'offer1' ? '2.2rem' : null}}>
                                                            <Button fullWidth className="customBtn" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{item.price}</Button>
                                                            <Typography align="center" style={{ color: "var(--blue)" }}>{item.para}</Typography>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>)
                                        }
                                    </Grid>
                                    <Box className="text-md-right text-center">
                                        <TnCLink />
                                    </Box>
                                    <Box className="text-center mt-3">
                                        <BlueBtn link={'/offer/'} title="More AfterPay Offers" />
                                    </Box>
                                </Box>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Offer