import { Container, Grid, Box, List, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BookNow, Sidebar, SimpleHero, SectionalHeading, InterestFree, ServiceBlog, PaymentOpt, ListItemComp } from '../../../../Components/Components'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import RootCanalImg from './images/root-canal.jpg';


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


const RootCanal = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [width, setWidth] = useState()

    useEffect(() => setWidth(window.innerWidth), [width]);

const breadcrumb = [{ id: "breadcrumb-10.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-10.2", link: null, text: "ROOT CANAL IN CARRUM DOWNS" }];

    return (
        <>
            <Helmet>
                <meta name="title" content="Dental Root Canal Treatment | Carrum Downs Family Dental Clinic" />
                <meta name="description" content="Carrum Downs Dental Group dentists are experienced and specialized in the root canal treatment. Have a look at the root canal treatment video here." />
                <title>Dental Root Canal Treatment | Carrum Downs Family Dental Clinic</title>
                <link rel="canonical" href="/service/root-canal/" />
                <meta name="robots" content="index" />
            </Helmet>
            <SimpleHero pageTitle="Root Canal in Carrum Downs" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <SectionalHeading title="Root Canal –Your Teeth has Nerves!" type="h2" />
                                                <Box className="d-flex flex-md-row flex-column">
                                                    <Box style={{ width: width > 600 ? "60%" : "100%" }}>
                                                        <Typography className="customPara">Teeth are tough outside due to the strong enamel but on inside they are pulp cavity with a root canal that has nerves. Root Canal treatment is performed on infected or inflamed tooth most likely due to untreated cavity.
                                                        </Typography>
                                                        <Typography className="customPara">In Carrum Downs Dental Group on Frankston-Dandenong Road, we perform Root Canal treatment to save the tooth by removing the infection and the associated pain.</Typography>
                                                    </Box>
                                                    <Box style={{ width: width > 600 ? "40%" : "100%" }}>
                                                        <img src={RootCanalImg} alt="Root Canal Carrum Downs" title="Root Canal Carrum Downs" className='img-fluid' loading="lazy" />
                                                    </Box>
                                                </Box>
                                                <Typography className="customPara">
                                                    The dentist as part of the treatment will remove the infected tooth pulp, nerves causing the pain and will seal the pulp with a material to prevent any further infection.
                                                </Typography>
                                                <Typography className="customPara">
                                                    After the root canal procedure is complete the dentist will restore the tooth with a crown to protect the tooth from breaking in future.
                                                </Typography>
                                            </Box>
                                        </section>
                                        <section className='GreySec rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <Box>
                                                    <SectionalHeading title="When do you need a root canal treatment at Carrum Downs Dental?" />
                                                    <Box>
                                                        <List>
                                                            {
                                                                [{ id: "root-canal-sec2-listItem1", text: "Pain due to hot/cold food that stays after consumption" }, { id: "root-canal-sec2-listItem2", text: "Constant pain" }, { id: "root-canal-sec2-listItem3", text: "Radiating pain, which can radiate to neck and shoulders" }, { id: "root-canal-sec2-listItem4", text: "Swelling" }, { id: "root-canal-sec2-listItem5", text: "Injury or trauma due to an accident" }, { id: "root-canal-sec2-listItem6", text: "Large untreated decay on the tooth" }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                            }
                                                        </List>
                                                    </Box>
                                                </Box>
                                                <Box className='mt-md-5 mt-4'>
                                                    <SectionalHeading title="Why should you go for root canal treatment?" type="h2" />
                                                    <Typography className="customPara">The cheaper option to relieve oneself of pain is to extract the infected tooth but the natural tooth provides much functionality that cannot be fully replaced with artificial tooth. Therefore if possible the tooth needs to be saved by performing root canal.</Typography>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="What is the treatment procedure?" type="h2" />
                                                <Typography className='customPara'>The root canal treatment at Carrum Downs Dental is performed under 3 appointments.</Typography>
                                                <Box mt={3}>
                                                    <List>
                                                        {
                                                            [{ id: "root-canal-sec4-listItem1", prefix: "Appointment 1:", text: "Under local anaesthesia, the tooth pulp, infection and nerves are removed through a small access hole made on top of the tooth. The tooth is washed with antibacterial solution to prevent further infections; an antibiotic/painkiller is placed into the tooth and filled with a temporary filling to cover the access. Dentist may prescribe some painkillers to keep you pain free for the next day or two." }, { id: "root-canal-sec4-listItem2", prefix: "Appointment 2:", text: "The dentist on the second appointment will open the access again to ensure the infections are completely removed. Endodontic files will be used to even the internal surface. This stage may repeat until the dentist is satisfied that the tooth is bacteria free." }, { id: "root-canal-sec4-listItem3", prefix: "Appointment 3:", text: " The infection-free root canal is then sealed with long-lasting barrier materials (the root filling). The tooth then undergoes restoration and the biting surfaces need protection – an artificial biting surface for the tooth is fashioned out of regular filling material. In many cases, where there is considerable loss of the tooth structure, there may be a need for an artificial crown made from porcelain or gold alloy or other materials." }].map(listItem => <ListItemComp key={listItem.id} prefix={listItem.prefix} text={listItem.text} />)
                                                        }
                                                    </List>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="What happens after the treatment is complete?" type="h2" />
                                                <Box mt={3}>
                                                    {
                                                        [{ id: "root-canal-sec5-listItem1", text: "The vast majority of people who undergo root canal treatment can expect a functional tooth after the treatment." }, { id: "root-canal-sec5-listItem2", text: "The treated tooth should last as long as you’re other teeth, provided the tooth is kept clean and that you maintain excellent oral hygiene." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                    }
                                                </Box>
                                                <Box mt={3}>
                                                    {
                                                        [`Please call Carrum Downs Dental Group on Frankston-Dandenong Road on 03-9782 1200 for your Root Canal treatment.`, `If you are Anxious about getting the dental treatment done, we can also provide Laughing Gas or Happy Gas sedation to help reduce your pain and anxiety during the treatment.`].map((item, index) => <Typography key={`rc-seclast-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
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
                                                            [{ id: "root-canal-faq1", que: "What is a root canal?", ans: "The root canal procedure involves removing the pulp (soft centre of the tooth), and the inside of the tooth is carefully cleaned, then filled and sealed. It’s designed to relieve pain and save your natural tooth." }, { id: "root-canal-faq2", que: "How much does a root canal cost?", ans: "The cost varies depending on how the tooth is affected. For the front tooth the cost starts from as little as $1000." }, { id: "root-canal-faq3", que: "Do root canals hurt?", ans: "No. Patients are given local anaesthesia to make the procedure less painful. However, a root can get sore after the procedure and cause mild discomfort for a few days." }, { id: "root-canal-faq4", que: "How long does a root canal take?", ans: "A root canal is usually a one-and-a-half-hour procedure that can sometimes require a second appointment with your dentist." }, { id: "root-canal-faq5", que: "How long does a root canal last?", ans: "A root canal is designed to last for a lifetime, but with good oral hygiene and regular dental visits for a check-up. You can have it crowned for extra strength and durability." }].map(item => <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
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
                                                <ServiceBlog category={'root-canal'} />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar slug={'/service/root-canal/'} isFormAvailable={false} />
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

export default RootCanal