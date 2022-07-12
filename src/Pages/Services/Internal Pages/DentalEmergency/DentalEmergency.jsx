import React, { useState } from 'react'
import { Box, Container, Grid, List, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'
import { BookNow, SectionalHeading, Sidebar, SimpleHero, ListItemComp, PaymentOpt, InterestFree, BlueBtn, ServiceBlog } from '../../../../Components/Components';
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



const DentalEmergency = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const breadcrumb= [{ id: "breadcrumb-4.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-3.2", link: null, text: "DENTAL EMERGENCY IN CARRUM DOWNS" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Dental Emergency in and around Carrum Downs & other Suburbs" />
                <meta name="description" content="If you are in a dental emergency and in need of immediate dental care, please call our clinic on (03) 8899 6367 to book your dental appointment." />
                <title>Dental Emergency in and around Carrum Downs & other Suburbs</title>
            </Helmet>
            <SimpleHero pageTitle="Dental Emergency in Carrum Downs" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <SectionalHeading title="Dental Emergency" type="h2" />
                                                <Typography className='customPara'>Nothing is worse than having an issue with your tooth. The pain which can be experienced can often be excruciating, plus some tooth problems can be quite dangerous, when you’ve got dental emergency, it is extremely important that you look into the problem as soon as you can and seek treatment from a dentist.</Typography>
                                            </Box>
                                        </section>
                                        <section className='GreySec rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <SectionalHeading title="Some of the common dental emergencies include:" type="h2" />
                                                <Box mt={3}>
                                                    <List>
                                                        {
                                                            [{ id: "dental-emergency-sec2-listItem1", text: "Broken Teeth" }, { id: "dental-emergency-sec2-listItem2", text: "Knocked Out Teeth" }, { id: "dental-emergency-sec2-listItem3", text: "Abscess or Swelling" }, { id: "dental-emergency-sec2-listItem4", text: "Lost or Broken Dentures" }, { id: "dental-emergency-sec2-listItem5", text: "Lost or Broken Fillings" }, { id: "dental-emergency-sec2-listItem6", text: "Broken Crown" }, { id: "dental-emergency-sec2-listItem7", text: "Broken or Loose Implants" }, { id: "dental-emergency-sec2-listItem8", text: "Impacted or Wisdom tooth" }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                        }
                                                    </List>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section>
                                            <Box mt={3}>
                                                {
                                                    [`Carrum Downs Dental Group’s policy is to cater for all dental emergencies during our working hours. Our dentists take the best effort to see all dental emergencies with immediate or same day appointments. Carrum Down’s dental emergency service covers wide areas of South Eastern suburbs of Melbourne.`, `If you are in a dental emergency and in need of immediate dental care, please call our clinic on <strong>(03) 9782 1200</strong> to book your dental appointment. Carrum Downs Dental is happy to serve on your dental emergency without any extra cost.`, `If you have a dental emergency After hours or on Sundays please call the Royal Dental Hospital on 1300 360 054.`].map((item, index) => <Typography key={`DentalEmergency-seclast-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                }
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
                                                <Box mt={3}>
                                                    <Box className="accordion" id="accordionExample">
                                                        {
                                                            [
                                                                { id: "dental-emergency-faq1", que: "When is it a dental emergency?", ans: "It’s any dental problems that require immediate treatment to alleviate severe pain, excessive bleeding or save a tooth. This includes avulsed teeth, damaged filling or crown, loose or cracked teeth and life-threatening infections." }, { id: "dental-emergency-faq2", que: "How much is the emergency dental treatment?", ans: "If you don’t have dental insurance, the cost of your emergency dental treatment will depend on the option you choose, including dental crown, filled cavity, tooth extraction and root canal." }, { id: "dental-emergency-faq3", que: "Can you go to the hospital for a dental emergency?", ans: "If you have a dental emergency, maybe your tooth got hit and is loose or has fallen out, you may be in severe pain. A hospital can help you with over-the-counter medications and probably stop bleeding." }, { id: "dental-emergency-faq4", que: "Does health insurance cover emergency dental?", ans: "Yes, most insurances cover emergency dentistry." }
                                                            ].map(item => {
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
                                        <Sidebar isFormAvailable={false} slug={"/service/dental-emergency/"} />
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

export default DentalEmergency