import { Container, Grid, Box, Card, CardMedia, CardContent, List, Button, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet';
import {  ListItemComp, SectionalHeading, SimpleHero } from '../../Components/Components';
import offer1 from './images/1.jpg'
import offer2 from './images/2.jpg'
import offer3 from './images/3.jpg'
import {CalendarMonth, MobileFriendly, QrCode, SentimentSatisfiedAlt} from '@mui/icons-material'


const Offer = () => {

    const breadcrumb = [{ id: "breadcrumb1", link: null, text: "Offer" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Offer" />
                <meta name="description" content="Check out the offers on teeth whitening, scale and clean with full check-up, & kid’s dental service. We accept afterpay dental plan to make dental treatment simple." />
                <title>Offer</title>
            </Helmet>
            <SimpleHero pageTitle="Offer" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl" className='py-md-5 py-4'>
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <section className='mb-md-5 mb-4'>
                                <Container maxWidth="xxl">
                                    <Box>
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
                                                        media: offer1
                                                    },
                                                    {
                                                        id: "offer2",
                                                        title: [{ id: "offer2.head1", variant: "h4", text: "Kids Dental Offer" }],
                                                        list: [{ id: "offer2-list1", text: "Comprehensive Dental Examination" },
                                                        { id: "offer2-list2", text: "Scale & Clean" },
                                                        { id: "offer2-list3", text: "Fluoride" }],
                                                        price: "$179*",
                                                        para: ["or 4 equal payments of $44.75* "],
                                                        media: offer2
                                                    },
                                                    {
                                                        id: "offer3",
                                                        title: [{ id: "offer3.head1", variant: "h4", text: "TakeHome Teeth Whitening Offer" }],
                                                        list: [{ id: "offer3-list1", text: "Whitening Consultation with Dentist" },
                                                        { id: "offer3-list2", text: "Whitening trays made to fit you" },
                                                        { id: "offer3-list3", text: "Whitening Gel and Demonstration of how to use it" }],
                                                        price: "$299*",
                                                        para: ["or 4 equal payments of $74.75* "],
                                                        media: offer3
                                                    }
                                                ].map(item => <Grid item xs={12} md={6} lg={4}>
                                                    <Card className="shadow">
                                                        <CardMedia component="img" image={item.media} className="img-fluid" />
                                                        <CardContent>
                                                            <Box style={{ height: "3.8rem" }}>
                                                                <SectionalHeading type={item.title[0].variant} title={item.title[0].text} />
                                                            </Box>
                                                            <Box style={{ height: "16rem" }}>
                                                                <List>
                                                                    {
                                                                        item.list.map(item => <ListItemComp key={item.id} text={item.text} />)
                                                                    }
                                                                </List>
                                                            </Box>
                                                            <Box mt={2}>
                                                                <Button fullWidth className="customBtn" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{item.price}</Button>
                                                            </Box>
                                                            <Typography align="center" style={{ color: "var(--blue)" }}>{item.para}</Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>)
                                            }
                                        </Grid>
                                    </Box>
                                </Container>
                            </section>
                            <section className='mb-md-5 mb-4'>
                                <Container maxWidth="xxl">
                                    <SectionalHeading title={'How Afterpay works'} type="h2" color1={'var(--light-green)'} align1={'center'} />
                                    <Box mt={3}>
                                        <Grid container spacing={3} justifyContent="center">
                                            {
                                                [{ id: "work1", title: "Book your visit", icon: <CalendarMonth /> }, { id: "work2", title: "Download the Afterpay app", icon: <MobileFriendly /> }, { id: "work3", title: "Get your barcode in the app to scan at reception", icon: <QrCode /> }, { id: "work4", title: "Enjoy a healthier smile", icon: <SentimentSatisfiedAlt /> }].map(item => <Grid item xs={12} md={4} xl={4}>
                                                    <Card className="shadow">
                                                        <CardContent>
                                                            <Box style={{ height: "3.8rem" }}>
                                                                <SectionalHeading type="h4" title={item.title} align1="center" />
                                                            </Box>
                                                            <Box className='d-flex justify-content-center align-items-center'>
                                                                <Box p={2} style={{ border: "1px solid var(--blue)", borderRadius: "50%", height: "4rem", width: "4rem" }} className="d-flex justify-content-center align-items-center">
                                                                    {item.icon}
                                                                </Box>
                                                            </Box>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>)
                                            }
                                        </Grid>
                                    </Box>
                                </Container>
                            </section>
                            <section>
                                <Container maxWidth="xxl">
                                    <Box className="embed-responsive embed-responsive-16by9">
                                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/275962196?h=12531ce500" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                                    </Box>
                                </Container>
                            </section>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Offer