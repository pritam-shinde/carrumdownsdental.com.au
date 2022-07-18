import React from 'react'
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



const ToothFilling = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const breadcrumb = [{ id: "breadcrumb-13.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-13.2", link: null, text: "TOOTH FILLINGS" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Tooth Fillings | Carrum Downs Dentist" />
                <meta name="description" content="Your teeth will be restored to a natural look and feel. Our experienced dentists in Carrum Downs are specialized in tooth fillings. Call us now!" />
                <title>Tooth Fillings | Carrum Downs Dentist</title>
                <link rel="canonical" href="/service/tooth-fillings/" />
                <meta name="robots" content="index" />
            </Helmet>
            <SimpleHero pageTitle="Tooth Fillings" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <SectionalHeading title="Tooth Fillings" type="h2" />
                                                <Typography className="customPara">Restorations have changed from years, but many people still have silver/mercury fillings. These fillings are not pleasing to the eye, and also don’t provide the strongest tooth structure. Porcelain and Tooth Coloured Restorations (inlays/onlays) create fillings that are not only beautiful (or unnoticeable) but also add strength to the weakened tooth. Thanks to the new bonding technologies.</Typography>
                                            </Box>
                                        </section>
                                        <section className='GreySec rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <Box>
                                                    <SectionalHeading title="Silver Filling – Disadvantages" type="h4" />
                                                    <Typography className="customPara">Drawbacks of Silver fillings are many. The edges of the silver filling can wear down, become weak or break. This results in the tooth not being protected and lets cavities get started once again. With age, the metal of a silver filling expands, contracts, and can split. Silver fillings contain 50 percent mercury. They can corrode, leak and cause stains on your teeth and gums.</Typography>
                                                    <SectionalHeading title="Thankfully, most silver fillings can safely be replaced with Tooth-Coloured Restorations." type="h5" />
                                                </Box>
                                                <Box className="mt-md-5 mt-4">
                                                    <SectionalHeading title="Advantages of Tooth-Coloured Restorations" type="h4" />
                                                    <Box>
                                                        {
                                                            [`Advantages of tooth-coloured restorations are many. Resin inlays/onlays bond to the tooth creating a tight, superior fit to the natural tooth. Such restorations can be used in instances where much of the tooth structure has been lost. The tooth remains intact and stronger.`, `<strong>Resulting in a Very Beautiful Smile</strong>`].map((item, index) => <Typography key={`toothFilling-sec3-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                        }
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Replacing Silver Fillings at Carrum Downs Dental Group" type="h4" />
                                                <Typography className="customPara">Have your silver fillings replaced with tooth-coloured restorations. This process requires one appointment.</Typography>
                                                <Box mt={3}>
                                                    <SectionalHeading title="For a tooth-coloured restoration:" type="h5" />
                                                    <Box mt={3}>
                                                        <List>
                                                            {
                                                                [{ id: "tooth-fillings-sec5-listItem1", text: "The old filling is removed along with any additional decay." }, { id: "tooth-fillings-sec5-listItem2", text: "A conditioning gel is placed on your tooth to prepare it for the new restoration." }, { id: "tooth-fillings-sec5-listItem3", text: "Bonding agent and resin (white filling) is placed on the tooth and a high-intensity light bonds the resin to the tooth." }, { id: "tooth-fillings-sec5-listItem4", text: "The tooth is then polished" }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                            }
                                                        </List>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='GreySec rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <Box>
                                                    <SectionalHeading title="For a porcelain or resin inlay/onlay:" type="h5" />
                                                    <SectionalHeading title="Your first appointment:" type="h6" />
                                                    <Box mt={3}>
                                                        <List>
                                                            {
                                                                [{ id: "tooth-fillings-sec6-listItem1", text: "The old filling is removed along with any additional decay." }, { id: "tooth-fillings-sec6-listItem2", text: "An impression is made to create a model of your teeth and sent to a Local Australian Dental Lab." }, { id: "tooth-fillings-sec6-listItem3", text: "A temporary inlay/onlay is placed in the tooth." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                            }
                                                        </List>
                                                    </Box>
                                                    <Typography dangerouslySetInnerHTML={{ __html: '<strong>At the Local Australian Lab:</strong> A resin is carefully placed into the model of your teeth. It is then designed to look natural.' }} />
                                                </Box>
                                                <Box className="mt-md-5 mt-4">
                                                    <SectionalHeading title="Your second appointment:" type="h6" />
                                                    <Box mt={3}>
                                                        <List>
                                                            {
                                                                [{ id: "tooth-fillings-sec8-listItem1", text: "The temporary inlay/onlay is removed." }, { id: "tooth-fillings-sec8-listItem2", text: "A conditioning gel is placed on your tooth to prepare it for the new inlay/onlay." }, { id: "tooth-fillings-sec8-listItem3", text: "Bonding agent is placed on the tooth and a high-intensity light bonds the porcelain/resin to the tooth." }, { id: "tooth-fillings-sec8-listItem4", text: "The tooth is then polished." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                            }
                                                        </List>
                                                    </Box>
                                                    <Typography dangerouslySetInnerHTML={{ __html: '<strong>Your teeth will be restored to a natural look and feel, more importantly they are now stronger and protects your teeth from further damage.</strong>' }} />
                                                </Box>
                                                <Box mt={3}>
                                                    <BlueBtn link='/book-now/' title="Book An Appointment" />
                                                    <BlueBtn anchor="tel: 03-9782 1200" title="Call Now" />
                                                </Box>
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
                                                                { id: "tooth-fillings-faq1", que: "How much does a tooth filling cost?", ans: "The cost of filing will be determined by the extent of damage, materials to be used and the procedures involved in the operation." },
                                                                { id: "tooth-fillings-faq2", que: "Can you eat after tooth filling?", ans: "The fillings do not harden immediately after the procedure, so it’s recommended to wait for at least 24 hours before chewing hard foods." },
                                                                { id: "tooth-fillings-faq3", que: "How to reduce tooth pain after filling", ans: "There are different ways to relieve pain after tooth filling, such as avoiding extreme temperatures both too hot and too cold. In addition, use a toothpaste that’s designed for sensitive teeth. You can also take painkillers such as ibuprofen and acetaminophen." },
                                                                { id: "tooth-fillings-faq4", que: "Is it normal for a tooth to be sensitive after filling?", ans: "Most people will experience tooth sensitivity after filling, but this should not last for more than a week. During this time, avoid sensitivity exposing it to triggers such as pressure, sweet foods, air and temperature." },
                                                                { id: "tooth-fillings-faq5", que: "Which dental filling is best for the tooth?", ans: "Composite fillings are the recommended option because they can be designed to match the appearance of your teeth. They are more expensive than silver fillings but not as durable. Porcelain-based ceramic fillings are also aesthetically pleasing and long-lasting." }
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
                                                <ServiceBlog category={'tooth-filling'} />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar slug="/service/tooth-fillings/" isFormAvailable={false} />
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

export default ToothFilling