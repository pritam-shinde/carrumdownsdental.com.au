import { Container, Grid, Box, Typography, List } from '@mui/material';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { SimpleHero, Sidebar, BookNow, InterestFree, SectionalHeading, ServiceBlog, ListItemComp, PaymentOpt } from '../../../../Components/Components'
import dentureTech from './images/Denture-tech-300x162.jpg';
import denturePatient from './images/Denture-dentist-patient-300x162.jpg';
import dentureService from './images/denture-services.jpg';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


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


const Denture = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const breadcrumb = [{ id: "breadcrumb-5.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-5.2", link: null, text: "DENTURES IN CARRUM DOWNS" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Dentures in Carrum Downs | Carrum Downs Dental Group Clinic" />
                <meta name="description" content="Dentist in Carrum Downs Dental Group has extensive denture experience that satisfies every patient’s denture needs. We provide high quality of dentures." />
                <title>Dentures in Carrum Downs | Carrum Downs Dental Group Clinic</title>
            </Helmet>
            <SimpleHero pageTitle="Dentures in Carrum Downs" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl" >
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <SectionalHeading title="We offer the best solutions for Dentures." type="h2" />
                                                <Box my={3}>
                                                    <Grid container spacing={3}>
                                                        {
                                                            [{ id: "dentures-sec1-image1", image: dentureTech, alt: "Dentures In Carrum Downs", title: "Dentures In Carrum Downs" }, { id: "dentures-sec1-image2", image: denturePatient, alt: "Denture Dentist with Patient", title: "Denture Dentist with Patient" }].map(item => <Grid item xs={12} sm={6}>
                                                                <img src={item.image} alt={item.alt} title={item.title} className="img-fluid mx-auto" loading="lazy" />
                                                            </Grid>)
                                                        }
                                                    </Grid>
                                                </Box>
                                                <Box>
                                                    {
                                                        [`Carrum Downs Dental Group on Frankston-Dandenong Rd Offers a wide range of dentures to satisfy each individual patient’s specific denture needs. We work with you to determine your exact requirements and what is required to meet them. We at Carrum Downs Dental Group take pride in the quality of our Dentures.`, `Dentures can help restore your way of life by helping you with day-to-day functions, such as eating and speaking, as well as help restore your confidence by improving your appearance and smile.`].map((item, index) => <Typography key={`denture-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='GreySec rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <SectionalHeading title="What are Dentures?" type="h2" />
                                                <Box>
                                                    <Typography className='customPara'>Dentures are replacement teeth that are removable. With the technological advancements there are several types of Dentures available to suit individual patient’s needs on comfort, convenience and look. Your Dentist will help you choose the best solution for you.</Typography>
                                                </Box>
                                                <Box mt={3}>
                                                    <List>
                                                        {
                                                            [{ id: "dentures-sec2-listItem1", prefix: "Full dentures", text: "If all the teeth are missing, this is a cost-effective way to replace all the teeth." }, { id: "dentures-sec2-listItem2", prefix: "Partial dentures", text: "Usually made out of acrylic or a metal framework to replace one or more teeth." }].map(listItem => <ListItemComp key={listItem.id} prefix={listItem.prefix} text={listItem.text} />)
                                                        }
                                                    </List>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <img src={dentureService} alt="Denture Carrum Downs" title="Denture Carrum Downs" className='img-fluid' loading="lazy" />
                                            </Box>
                                        </section>
                                        <section className='GreySec rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <SectionalHeading title="Advantages of Dentures." type="h2" />
                                                <Box>
                                                    <List>
                                                        {
                                                            [{ id: "dentures-sec3-listItem1", text: "Improved ability to bite and chew" }, { id: "dentures-sec3-listItem2", text: "Gives your face a fuller appearance" }, { id: "dentures-sec3-listItem3", text: "Can be removed for proper cleaning and brushing" }, { id: "dentures-sec3-listItem4", text: "Reduced speeches problems caused by gaps and missing teeth" }, { id: "dentures-sec3-listItem5", text: "Protects remaining teeth (if any) from excess wear" }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                        }
                                                    </List>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Denture procedure at Carrum Downs Dental Group:" type="h2" />
                                                <Typography className="customPara">The exact denture procedure needed will vary with the type of denture needed. However the procedure will usually revolve around the following. You have an Initial Consultation with your dentist to assess your mouth for treatment planning.</Typography>
                                                <Box>
                                                    <List>
                                                        {
                                                            [{ id: "dentures-sec4-listItem1", text: "Preliminary impression of your teeth and gums are taken using a high quality impression material." }, { id: "dentures-sec4-listItem2", text: "Accurate impression trays specially made for your mouth are fabricated at the lab. On subsequent visits, more impressions with finer details will be taken. This gives our dentist an exact copy of your mouth that we can build your new dentures from." }, { id: "dentures-sec4-listItem3", text: "With help from your dentist you can decide which tooth shapes, sizes and colours fit your mouth and look right for you. Your ‘bite’ is also recorded by the dentist. In the case of complete dentures the dentist records where the bite of the new dentures needs to be. Our dentist works with you to get this accurately." }, { id: "dentures-sec4-listItem4", text: "A trial denture is made up to check for accuracy of fit and appearance. The trial denture will use the same colour and shape of teeth that will be on the final denture. Any changes are easily made at this stage. If changes are needed, new trial dentures are made up and checked with a ‘re-try’ visit." }, { id: "dentures-sec4-listItem5", text: "Once you and dentist are happy with the trial denture, the final denture is made at the lab." }, { id: "dentures-sec4-listItem6", text: "At least one review appointment is required to check how you and your mouth are adjusting to the denture. Some final adjustments to the denture may be needed." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                        }
                                                    </List>
                                                </Box>
                                                <Typography className='font-weight-bold' style={{ color: "var(--blue)" }}>At Carrum Downs Dental we use Australian owned and licensed dental labs in Melbourne. The dental lab technician creates your dentures in the lab. She works closely with our dentist to gain the desired result. Using a local dental lab allows us to provide you with your dentures in a timely manner.</Typography>
                                            </Box>
                                        </section>
                                        <section style={{ marginTop: "3.5rem" }}>
                                            <PaymentOpt />
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box className='faq'>
                                                <SectionalHeading title="Frequently Asked Questions (FAQs)" align1="center" color1="#000" />
                                                <Box mt={3}>
                                                    <Box className="accordion" id="accordionExample">
                                                        {
                                                            [{ id: "denture-faq-1", que: "How much do dentures cost?", ans: "Depending on the denture being Acrylic or Chrome (metal), the cost for a single arch can vary from $700 to $1300." }, { id: "denture-faq-2", que: "How to clean dentures?", ans: "Dentures need to be removed for proper cleaning. Soak and brush things using a soft-bristled brush and a denture antibacterial cleaner to remove food, plaque and other debris." }, { id: "denture-faq-3", que: "Can cracked dentures be repaired?", ans: "Oftentimes, a broken or chipped denture can be easily repaired. Your dentist removes the damaged tooth, takes proper measurements and replaces it to match the rest of the denture." }, { id: "denture-faq-4", que: "Can I sleep with partial dentures?", ans: "You can sleep and eat with a partial denture without any problem. However, sometimes it might feel more comfortable to take it off when you sleep, but that’s up to you." }].map(item => <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                                                <AccordionSummary aria-controls={`${item.id}d-content`} id={`${item.id}d-header`}>
                                                                    <Typography variant="h3" >{item.que}</Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <Typography className="customPara">
                                                                        {item.ans}
                                                                    </Typography>
                                                                </AccordionDetails>
                                                            </Accordion>)
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
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title='Recent Posts' type="h2" align1={'center'} />
                                                <ServiceBlog category={'denture'} />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar slug={'/service/dentures/'} isFormAvailable={false} />
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

export default Denture