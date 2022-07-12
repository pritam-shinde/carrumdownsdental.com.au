import { Container, Grid, Box, Typography, List } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import { BookNow, SimpleHero, Sidebar, SectionalHeading, ServiceBlog, InterestFree, ListItemComp, TnCLink, PaymentOpt } from '../../../../Components/Components'
import DIbefore from './images/Implant-before.jpg'
import DIafter from './images/Implant-after.jpg'
import mySmilePlan from './images/mysmileplan.com_.au_.png'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import './sass/dentalImplants.css'

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

const DentalImplant = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const breadcrumb=[{ id: "breadcrumb-4.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-4.2", link: null, text: "DENTAL IMPLANTS IN CARRUM DOWNS" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Dental Implants in Carrum Downs | Dentist in Carrum Downs" />
                <meta name="description" content="Dental Implants are an effective way to deal with tooth loss. Our dental implants are made from Titanium. Call us today for your dental implants treatment." />
                <title>Dental Implants in Carrum Downs | Dentist in Carrum Downs</title>
            </Helmet>
            <SimpleHero pageTitle='Dental Implants in Carrum Downs' breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <List id="dental_implant_list1">
                                                {
                                                    [{ id: "dental-implant-sec1-listItem1", text: "Complete Dental Implants with Crown normally $4500* is special on $3700*." },
                                                    { id: "dental-implant-sec1-listItem2", text: "We use high quality State-Of-The-Art Implant kit from MIS Australia." },
                                                    { id: "dental-implant-sec1-listItem3", text: "15 Years+ experience in performing dental Implants." },
                                                    { id: "dental-implant-sec1-listItem4", text: "Flexible Payment plans available." }].map(listItem => <ListItemComp prefix={null} key={listItem.id} text={listItem.text} />)
                                                }
                                                </List>
                                            </Box>
                                            <Box>
                                                {
                                                    [`Dental Implants with Crown have quickly become a very effective way for patients to deal with tooth loss. The dental Implants along with restoring the functionality of the tooth also increase an individual’s confidence to lead a normal life.`, `Carrum Downs Dental Group’s Dental Implants are made from Titanium, a very strong material that is also compatible with human body. A crown placed on top of it will make it appear and function as a normal tooth and provides up to 90% chewing capacity.`].map((item, index) => <Typography key={`dentalimplant-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                }
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Choose Carrum Downs Dental on Dandenong-Frankston Road for all your Dental Implant requirements." type="h2" />
                                                <Box mt={3}>
                                                    <Grid container spacing={5} >
                                                        {
                                                            [{ id: "dental-implant-sec2-image1", image: DIbefore, alt: "Implant Before", title: "Implant Before" }, { id: "dental-implant-sec2-image2", image: DIafter, alt: "Implant After", title: "Implant After" }].map(image => <Grid key={image.id} item xs={12} sm={6}>
                                                                <Box style={{ border: "2px solid #eee", padding: "1rem", borderRadius: "1.2rem" }}>
                                                                    <img src={image.image} alt={image.alt} title={image.title} className="img-fluid rounded-lg" loading="lazy" />
                                                                </Box>
                                                            </Grid>)
                                                        }
                                                    </Grid>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Benefits of Dental Implant" type="h2" />
                                                <Box mt={3}>
                                                    {
                                                        [{ id: "dental-implant-sec3-listItem1", text: "Dental Implants are the best alternative for missing teeth, because they offer permanent solution." }, { id: "dental-implant-sec3-listItem2", text: "Dental Implants are very much like your natural teeth. They look and feel just like your real teeth." }, { id: "dental-implant-sec3-listItem3", text: "Chew better and Smile better." }, { id: "dental-implant-sec3-listItem4", text: "Fell the confidence in your rise again to the top." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                    }
                                                </Box>
                                            </Box>
                                        </section>

                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="How does the Dental Implant procedure work in Carrum Downs Dental Group in Dandenong-Frankston Rd." type="h2" />
                                                <SectionalHeading title="Dental Implant procedure follows the below steps" type="h3" />
                                                <Box mt={3}>
                                                    {
                                                        [{ id: "dental-implant-sec4-listItem1", text: "Insertion of the Implant" }, { id: "dental-implant-sec4-listItem2", text: "Allowing the gum to heal (Approx. 3 months for the bone to bond to Implant)" }, { id: "dental-implant-sec4-listItem3", text: "Exposure of the Implant site" }, { id: "dental-implant-sec4-listItem4", text: "Taking Impression for Crown preparation with Colour matching." }, { id: "dental-implant-sec4-listItem5", text: "Insertion of Crown and Bridge or Over-denture." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                    }
                                                </Box>
                                                <Box mt={3} className="embed-responsive embed-responsive-16by9">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tvXccIIeBeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </Box>
                                                <Box mt={3}>
                                                    <TnCLink />
                                                    <img src={mySmilePlan} alt="My Smile Plan - Interest free" title="My Smile Plan - Interest free" className='img-fluid mt-3' loading="lazy" />
                                                </Box>
                                            </Box>
                                        </section>
                                        <section style={{ marginTop: "3.5rem" }}>
                                            <Box>
                                                <PaymentOpt />
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box className='faq'>
                                                <SectionalHeading title="Frequently Asked Questions (FAQs)" type="h2" align1="center" />
                                                <Box mt={3}>
                                                    <Box className="accordion" id="accordionExample">
                                                        {
                                                            [
                                                                { id: "dental-implant-faq-1", que: "How long do dental implants last?", ans: "Dental implants are considered the best alternative for lost teeth because they can last for a lifetime. With regular brushing, flossing and dental check-ups, they can offer a permanent solution. The crown, however, only lasts between 10 to 15 years before needing a replacement." }, { id: "dental-implant-faq-2", que: "Are dental implants painful?", ans: "The procedure of dental implants is not painful since it’s performed with anaesthesia to numb the site of the implant. After the procedure, however, some patients may experience a mild, which can be relieved using painkillers." }, { id: "dental-implant-faq-3", que: "How long does dental implant surgery take?", ans: "The time it takes to complete a dental implant surgery varies based on the technique your dentist decides to use and the location of the implant. Generally, it takes about 1 hour to place the implant." }, { id: "dental-implant-faq-4", que: "Is dental implant safe?", ans: "Dental implants have been done safely for over 50 years with up to 98% success rate. This means it’s safe for almost anyone so long as your oral health is good." }
                                                            ].map(item => <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
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
                                                <ServiceBlog category={'dental-implant'} />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar slug={'/service/dental-implants/'} isFormAvailable={false} />
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

export default DentalImplant