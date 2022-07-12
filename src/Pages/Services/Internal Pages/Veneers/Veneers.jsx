import { Container, Grid, Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { BookNow, Sidebar, SimpleHero, SectionalHeading, ServiceBlog, InterestFree, PaymentOpt, BlueBtn } from '../../../../Components/Components';
import veneers from './images/porcelain-Veneers.jpg';
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



const Veneers = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const [width, setWidth] = useState()

    useEffect(() => setWidth(window.innerWidth), [width])

    const breadcrumb = [{ id: "breadcrumb-8.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-8.2", link: null, text: "DENTAL VENEERS IN CARRUM DOWNS" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Porcelain Veneers Dentist | Best Dentist Carrum Downs" />
                <meta name="description" content="Porcelain veneers are the perfect choice for improving your smiles. Carrum Downs Dental has the best dentists that perform smile makeovers at affordable costs." />
                <title>Porcelain Veneers Dentist | Best Dentist Carrum Downs</title>
            </Helmet>
            <SimpleHero pageTitle="Dental Veneers in Carrum Downs" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <SectionalHeading title="When you look at pictures do you ever wish your teeth were whiter, straighter, more aligned?" type="h2" />
                                                <Typography className='customPara'>At Carrum Downs Dental Group on Frankston-Dandenong Road our dentists perform porcelain veneer ‘smile makeovers’ which can address all of these issues. We are delighted to be able to offer this “Hollywood” technique to our patients.</Typography>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="What are porcelain Veneers?" type="h2" />
                                                <Box mt={3} className="d-flex flex-md-row flex-column">
                                                    <Box style={{ width: width > 600 ? "60%" : "100%" }}>
                                                        {
                                                            [`<strong>Porcelain veneers are thin shells of ceramic that bond directly to the front surfaces of the teeth.</strong> They are an ideal choice for improving your smile and have become increasingly popular due to their simplicity and versatility.`, `Placing custom teeth veneers requires a high degree of technical skill as well as attention to cosmetic detail. We place dental veneers routinely, and design each case individually to match and enhance the characteristics of each patient’s smile.`].map((item, index) => <Typography key={`veneers-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                        }
                                                    </Box>
                                                    <Box style={{ width: width > 600 ? "40%" : "100%" }}>
                                                        <img src={veneers} alt="porcelain-Veneers" title="porcelain-Veneers" className='img-fluid' loading="lazy" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='GreySec roundex mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <Box>
                                                    <SectionalHeading title="Will they look like normal teeth?" type="h2" />
                                                    <Typography className='customPara' >When bonded to the teeth, the ultra-thin porcelain veneers are virtually undetectable. They are also highly resistant to coffee, tea, or even cigarette stains. For strength and appearance, their resemblance to healthy, white tooth enamel is unsurpassed by other restorative options.</Typography>
                                                </Box>
                                                <Box>
                                                    <SectionalHeading title="How durable are porcelain veneers?" type="h2" />
                                                    {
                                                        [`With proper care, porcelain veneers will brighten your smile for well over a decade. At Carrum Downs Dental Group on Frankston-Dandenong Road we ensure that your teeth veneers are crafted from the highest quality porcelains and are bonded with the most advanced and proven materials available.`, `Refraining from using your veneers as tools to open and cut things will prolong their life, and if accidental breakage or damage occurs, it is usually possible to replace only the veneer involved.`, `Call Carrum Downs Dental on <strong>03-9782 1200</strong> today for your consultation and Change your smile.`].map((item, index) => <Typography key={`veneers-sec3-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                                <Box mt={3}>
                                                    <BlueBtn link='/book-now/' title="Book An Appointment" />
                                                    <BlueBtn anchor="tel: 03-9782 1200" title="Call Now" />
                                                </Box>
                                            </Box>
                                        </section>
                                        <section style={{ marginTop: "3.5rem" }}>
                                            <PaymentOpt />
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box className="faq">
                                                <SectionalHeading title="Frequently Asked Questions (FAQs)" align1="center" color1="#000" />
                                                <Box mt={3}>
                                                    <Box className="accordion" id="accordionExample">
                                                        {
                                                            [{ id: "veneers-faq1", que: "Are veneers covered by dental insurance?", ans: "Being a cosmetic procedure, it depends on the insurance cover you have. Check with your" }, { id: "veneers-faq2", que: "Do dental veneers stain?", ans: "Dental veneers are made from stain-resistant composite, so they do not get easily stained.  However, they can be susceptible to staining over time." }, { id: "veneers-faq3", que: "Do porcelain veneers ruin your teeth?", ans: "No, porcelain veneers do not ruin natural teeth. In fact, they are customized to fit over your teeth and enhance the smile." }, { id: "veneers-faq4", que: "Do veneers make your breath smell?", ans: "No, veneers do not make your breath smell. The foul smell could be caused by other factors and the neglect of your oral hygiene." }].map(item => <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                                            <AccordionSummary aria-controls={`${item.id}d-content`} id={`${item.id}d-header`}>
                                                              <Typography variant='h3' >{item.que}</Typography>
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
                                                <ServiceBlog category={'veneers'} />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar slug={'/service/veneers/'} isFormAvailable={false} />
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

export default Veneers