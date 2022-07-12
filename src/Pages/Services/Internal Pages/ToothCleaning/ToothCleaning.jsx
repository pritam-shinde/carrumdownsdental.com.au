import { Container, Grid, Box, Typography, List } from '@mui/material'
import { Helmet } from 'react-helmet'
import React, { useState } from 'react'
import { BookNow, Sidebar, SimpleHero, SectionalHeading, ServiceBlog, InterestFree, PaymentOpt, BlueBtn, ListItemComp } from '../../../../Components/Components';
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


const ToothCleaning = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const breadcrumb = [{ id: "breadcrumb-11.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-11.2", link: null, text: "TEETH CLEANING IN CARRUM DOWNS" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Professional Dental Scale and Clean | Carrum Downs Dentist" />
                <meta name="description" content="We offer a highly professional dental Scaling & Cleaning service which is tailored to the individual and will ensure the safe treatment and impressive results." />
                <title>Professional Dental Scale and Clean | Carrum Downs Dentist</title>
            </Helmet>
            <SimpleHero pageTitle="Teeth Cleaning in Carrum Downs" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <SectionalHeading title="Professional Dental Scale and Clean" type="h2" />
                                            <Box mt={3}>
                                                {
                                                    [`Oral health plays an important factor in our everyday life. Every year, millions of people go to their dentist for a check-up and Scale & Clean. This is quite important as our overall health is related to our oral health. The build-up of bacteria and/or plaque in the mouth can travel to other parts of the body, causing serious health problems.`, `It is important that you see your dentist twice a year for an overall check-up of your dental health as well as having your teeth professionally cleaned. If you don’t already have an appointment for your next visit, feel free to call us here at Carrum Downs Dental Group.`].map((item, index) => <Typography key={`toothCleaning-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                }
                                            </Box>
                                        </section>
                                        <section className='GreySec rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <Box>
                                                    <SectionalHeading title="What is a Professional Clean?" type="h2" />
                                                    <Typography className='customPara'>Professional cleaning is also called as dental prophylaxis, it’s refers to removal of plaque, calculus and stains from the teeth both above and below the gum line. It also involves scaling and polishing to remove plaque as well as to keep it from attaching itself to the teeth in the future.</Typography>
                                                </Box>
                                                <Box>
                                                    <SectionalHeading title="What to Expect during your Scale/Clean at Carrum Downs Dental Group" type="h2" />
                                                    <Typography className='customPara'>Your dentist will usually do a thorough check-up of your teeth and gums, possibly followed by a taking x-rays (if required) to ensure that you do not have any cavities in your teeth. If the x-ray does show a cavity, your dentist will correct that problem, or any other dental problems he may find, before the cleaning is done.</Typography>
                                                </Box>
                                                <Box mt={3}>
                                                    <BlueBtn link='/book-now/' title="Book An Appointment" />
                                                    <BlueBtn anchor="tel: 03-9782 1200" title="Call Now" />
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Cleaning the teeth involves the following steps:" type="h2" />
                                                <Box mt={3}>
                                                    <List>
                                                        {
                                                            [{ id: "teeth-cleaning-sec4-listItem1", text: "Your dentist will inspect your mouth for bleeding or inflamed gums, infections, sores, or any other concerns." }, { id: "teeth-cleaning-sec4-listItem2", text: "Your dentist will then use a cleaning agent that will free any deep level plaque that has grown around your teeth or gums." }, { id: "teeth-cleaning-sec4-listItem3", text: "By scraping along the teeth and gums, your hygienist will remove even more of the plaque that is difficult to remove." }, { id: "teeth-cleaning-sec4-listItem4", text: "Your dentist will floss your teeth to be certain every area has been thoroughly cleaned of all plaque." }, { id: "teeth-cleaning-sec4-listItem5", text: "A fluoride treatment may be applied at this time if your dentist thinks it’s required." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)

                                                        }
                                                    </List>
                                                </Box>
                                                <Typography className='customPara'>At the end of your professional cleaning, your dentist will discuss your oral condition with you if she has not already done so, as well as any other treatments you may need. Before you leave the office, this would be an excellent time to schedule your next professional cleaning and check-up at Carrum Downs Dental group to ensure your smile stays beautiful and healthy.</Typography>
                                                <Typography dangerouslySetInnerHTML={{ __html: '<a href="/terms-and-conditions/" class="font-weight-bold" style="color:var(--blue);" >* Terms and Conditions apply.</a>' }} />
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
                                                                { id: "teeth-cleaning-faq1", que: "How many times a year should you have teeth cleaning?", ans: "If you have good oral hygiene and a healthy mouth, your teeth need professional cleaning twice a year. Many dental insurance policies cover two cleanings per year." }, { id: "teeth-cleaning-faq2", que: "Does it hurt to get your teeth cleaned?", ans: "It’s evident that most people dread teeth cleanings due to the prodding, the strange noises and jaw discomfort. We use numbing gel if required to reduce any sensitivity and can do it slowly to ensure you are comfortable." }
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
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title='Recent Posts' type="h2" align1={'center'} />
                                                <ServiceBlog category={'children-dentistry'} />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar isFormAvailable={false} slug={'/service/teeth-cleaning/'} />
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

export default ToothCleaning