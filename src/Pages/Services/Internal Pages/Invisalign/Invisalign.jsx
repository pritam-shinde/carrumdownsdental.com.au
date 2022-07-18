import React, { useState, useEffect } from 'react'
import { BookNow, Sidebar, SimpleHero, SectionalHeading, ServiceBlog, InterestFree, PaymentOpt, BlueBtn, ListItemComp } from '../../../../Components/Components';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import clearBite from './images/Clearbite.jpg';
import clearBiteAligner from './images/Clear-bite-aligners.jpg';
import { Helmet } from 'react-helmet';
import { Container, Grid, Box, List, Typography } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Invisalign = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const [width, setWidth] = useState()

    useEffect(() => setWidth(window.innerWidth), [width]);

    const breadcrumb = [{ id: "breadcrumb-9.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-9.2", link: null, text: "INVISALIGN" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Teeth Aligners by Carrum Downs Dental Group | Dentist in Skye" />
                <meta name="description" content="Carrum Downs Dental Group has the best dentist in the Carrum Downs that provide high quality teeth aligners which makes you smile more pleasant." />
                <title>Teeth Aligners by Carrum Downs Dental Group | Dentist in Skye</title>
                <link rel="canonical" href="/service/teeth-aligners/" />
                <meta name="robots" content="index" />
            </Helmet>
            <SimpleHero pageTitle="Invisalign" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <SectionalHeading title="Invisalign- The Most Effective and Affordable way to Straighten your Teeth" type="h2" />
                                                <Box mt={3}>
                                                    {
                                                        [`Let’s face it; we all would like to own a set of perfect looking teeth. However, due to various reasons, a majority of people never really feel confident with their smiles. The effects can be both psychologically and socially damaging. So, why do most people shy away from seeking treatment to correct crooked, unsightly gaps,or crowding? Well, it turns out that one major reason is the fear of using traditional metal braces.`, `Even though the results will be beautiful, traditional metal braces come with their fair share of issues. Regular irritation, hard to maintain good oral hygiene, limits your diet, not to mention that they are unsightly as well. The good news is that due to advancement in dental technology, there is a better alternative to traditional metal braces known as Invisalign.`, `At Carrum Downs Dental on Frankston-Dandenong Rd, we provide affordable and quality Invisalign treatment that can change your smile in just a matter of weeks.`].map((item, index) => <Typography key={`invisalign-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='GreySec rounded mt-md-5 mt-4 '>
                                            <Box p={3}>
                                                <Box>
                                                    <SectionalHeading title="What is Invisalign?" type="h2" />
                                                    <Typography className='customPara'>Invisalign is a modern solution that helps you straighten your teeth without using the traditional metal braces. Your dentist will use clear, smooth,and durable plastic to make a set of nearly invisible aligners. Our dentist at Carrum Downs Dental Clinic will customise the appliances to fit your teeth perfectly. You will then have to wear and replace them after every two weeks for your teeth to slowly get into position.</Typography>
                                                </Box>
                                                <Box className="mt-md-5 mt-4">
                                                    <SectionalHeading title="Benefits of Invisalign:" type="h2" />
                                                    <Box mt={3} >
                                                        {
                                                            [{ id: "teeth-aligners-sec3-listItem1", prefix: "Aesthetics:", text: "Invisalignis nearly invisible and more aesthetic appealing compared to traditional metal braces." }, { id: "teeth-aligners-sec3-listItem2", prefix: "Comfort:", text: "With Invisalign, you will not have to endure the agony of sharp corners and wires into your mouth like it is the case with metal braces." }, { id: "teeth-aligners-sec3-listItem3", prefix: "Speed:", text: "Invisalign offers positive results within a concise period of time. This is because they can be able to straighten a number of teeth at once." }, { id: "teeth-aligners-sec3-listItem4", prefix: "Results:", text: "Invisalign offers more satisfying results compared to metal braces. They can move teeth in a way braces cannot." }, { id: "teeth-aligners-sec3-listItem5", prefix: "Better Breath:", text: "It is almost impossible to clean your teeth around metal braces. This leaves your mouth with bad breath. With Invisalign, you can completely take them off and carry out your normal dental hygiene measures, including brushing and flossing. Also, with conventional braces, there is a high risk of gum disease due to the difficulty in cleaning the teeth." }].map(listItem => <ListItemComp key={listItem.id} prefix={listItem.prefix} text={listItem.text} />)
                                                        }
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="How does it work?" type="h2" />
                                                <Box mt={3} className='d-flex flex-md-row flex-column'>
                                                    <Box className="mr-3" style={{ width: width > 600 ? "40%" : "100%" }}>
                                                        <img src={clearBite} alt="Clearbite" title="Clearbite" className='img-fluid' style={{float:"left"}} loading="lazy" />
                                                    </Box>
                                                    <Box style={{ width: width > 600 ? "60%" : "100%" }}>
                                                        <Typography className='customPara'>Invisalign are one of a kind dental treatment since they are custom made to fit your teeth. The appliance will then perfectly fit each of your teeth and will work to reposition your teeth over time. The teeth will virtually move </Typography>
                                                    </Box>
                                                </Box>
                                                <Box className="mt-md-n2">
                                                    <Typography className="customPara">into place depending on the exact movements your dentist will plan for you. Invisalign are made of smooth, comfortable,and nearly invisible material.</Typography>
                                                    <Typography className='customPara'>
                                                        Actually, no one can tell if you are wearing them unless you choose to tell. With Invisalign, you will not be a subject of humour or humiliation as it is with the traditional metal braces. The appliances will help you achieve a brighter smile with minimum interference.
                                                    </Typography>
                                                </Box>
                                                <Box my={3}>
                                                    <img src={clearBiteAligner} alt="CLEARBITE – Affordable Clear Aligners!" title="CLEARBITE – Affordable Clear Aligners!" className='img-fluid' loading="lazy" />
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Treatment Process" type="h2" />
                                                <Typography className='customPara'>The chances are that you might be familiar with the way Invisalign work. However, we would like to dig a little bit deeper and give you a step by step procedure on the treatment process. Irrespective of if you are considering to undertake the treatment yourself or someone else close to you, knowing exactly what will happen will enhance your confidence as well as ease any of your fears.</Typography>
                                                <Box mt={3}>
                                                    <List>
                                                        {
                                                            [{ id: "teeth-aligners-listItem1", prefix: "Initial Consultation at Carrum Downs Dental Group on Frankston-Dandenong Rd", text: "During the initial consultation, nothing much will happen when it comes to undertaking the treatment. This is the visit your dentist will discuss with you about the benefits of Invisalign and offer other available treatment alternatives. If you settle on Invisalign, the dentist will make some few check-ups on your teeth to determine if you are a good candidate for the treatment. During this appointment, you will also have the opportunity to ask any question to your dentist at Carrum Downs Dental Clinic;you feel necessary about the treatment." }, { id: "teeth-aligners-listItem2", prefix: "Create a 3D Image of Your Teeth", text: "Your dentist will then take some pictures, x-rays as well as impressions of your teeth, which will then be used to create a 3-D image. The dentist will use these images to create a precise treatment plan. This will include exactly how the teeth will move and get into the desired position. Moreover, the dentist will use the same technology to show the entire process of how your teeth will move until you achieve what you are looking for." }, { id: "teeth-aligners-listItem3", prefix: "Receive Your Custom Invisalign Based On Your Personalised Treatment Plan", text: "The dentist will then create a series of custom-made Invisalign for you. As already mentioned above, the aligners will be made out of a comfortable, smooth, nearly invisible material. Therefore, the aligners will not irritate your cheeks or gums. Make sure you wear the appliances throughout the day and only remove them when you want to undertake regular dental hygiene practices such as brushing and flossing." }, { id: "teeth-aligners-listItem4", prefix: "Wear New Set of Invisalign Every Two Weeks", text: "You will be required to wear a new set of Invisalign after every two weeks. This will help you to advance to the next level of treatment. Also, you will be required to visit your dentist for check-ups every six weeks. You will be able to see some notable difference with your teeth, after every two weeks." }, { id: "teeth-aligners-sec6-listItem5", prefix: "Enjoy Your New Bright Smile", text: "The entire treatment will take approximately a year. However, different patients have unique cases,and some might take slightly more time while others might take less time. A patient’s age mostly determines this. Teens achieve their dream much faster compared to older patients. To achieve the best results within the shortest time, make sure that you wear the Invisalign for about 20 to 22 hours a day." }].map(listItem => <ListItemComp key={listItem.id} prefix={listItem.prefix} text={listItem.text} />)
                                                        }
                                                    </List>
                                                </Box>
                                                <Typography dangerouslySetInnerHTML={{ __html: "If you are looking forward to brightening your smile with Invisalign, Visit us at <strong>Carrum Downs Dental Group on Dandenong-Frankston Rd</strong>. We offer quality and affordable services to all our clients. We will also try and ease the burden of treatment fee by offering you staged payment throughout the treatment period. Please call our clinic on 03-9782 1200 to book an appointment today." }} className="customPara" />
                                            </Box>
                                        </section>
                                        <section style={{ marginTop: "3.5rem" }}>
                                            <Box>
                                                <PaymentOpt />
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4 faq'>
                                            <Box className='faq'>
                                                <SectionalHeading title='Frequently Asked Questions (FAQs)' type='h2' align1="center" />
                                                <Typography variant='h2' style={{ fontSize: "2rem" }} align="center" >Grow up Smiling – Child Dental Benefit Schedule.</Typography>
                                                <Box mt={3}>
                                                    <Box className="accordion" id="accordionExample">
                                                        {
                                                            [{ id: "teeth-aligners-faq1", que: "How much does Invisalign cost?", ans: "On average, Invisalign costs starts from $4500 and depends on the amount of correction required and the smile you are after." }, { id: "teeth-aligners-faq2", que: "How long does Invisalign take?", ans: "It takes between 6 months and two years for people who use Invisalign to achieve results, but you start seeing the results in a matter of weeks. The treatment time depends on the complexity of the issue you intend to address." }, { id: "teeth-aligners-faq3", que: "Does Invisalign hurt?", ans: "No, Invisalign is not painful, but some people experience soreness, given the pressure being exerted. However, compared to traditional braces, Invisalign is usually less painful." }, { id: "teeth-aligners-faq4", que: "How to clean Invisalign?", ans: "Remove your aligners at night and use a soft-bristled brush to scrub them gently. You should also use a clear liquid soap to remove any plaque and trapped food particles. Remember to rinse through with clean water before putting them back." }, { id: "teeth-aligners-faq5", que: "Is Invisalign better than braces?", ans: "Both methods are similar in that they exert pressure to align your teeth. However, Invisalign is more comfortable than traditional braces since it exerts pressure on the entire teeth." }].map(item => {
                                                                return (<>
                                                                    <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                                                        <AccordionSummary aria-controls={`${item.id}d-content`} id={`${item.id}d-header`}>
                                                                            <Typography variant="h3" >{item.que}</Typography>
                                                                        </AccordionSummary>
                                                                        <AccordionDetails>
                                                                            <Typography className="customPara">
                                                                                {item.ans}
                                                                            </Typography>
                                                                        </AccordionDetails>
                                                                    </Accordion>
                                                                </>)
                                                            })
                                                        }
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <InterestFree />
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <BookNow />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar slug={`/service/teeth-aligners/`} isFormAvailable={false} />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Invisalign