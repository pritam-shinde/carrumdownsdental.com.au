import { Container, Grid, Box, Typography, List } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BookNow, Sidebar, SimpleHero, InterestFree, SectionalHeading, ServiceBlog, PaymentOpt, ListItemComp, BlueBtn } from '../../../../Components/Components';
import crownBridges from './images/defective-large-old-fillings-993x1024.jpg';
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

const CrownsNBridges = () => {
    const [width, setWidth] = useState()

    useEffect(() => setWidth(window.innerWidth), [width]);



    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const breadcrumb = [{ id: "breadcrumb-3.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-3.2", link: null, text: "CROWNS AND BRIDGE IN CARRUM DOWNS" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Crown & Bridge in Carrum Downs | Carrum Downs Dental Clinic" />
                <meta name="description" content="Crowns and Bridges restore damaged and missing teeth. We have the best dentist in Carrum Downs that provide the greatest dental services. Contact us today!" />
                <title>Crown & Bridge in Carrum Downs | Carrum Downs Dental Clinic</title>
                <link rel="canonical" href="/service/crowns-and-bridge/" />
                <meta name="robots" content="index" />
            </Helmet>
            <SimpleHero pageTitle="Crowns and bridge in Carrum Downs" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <SectionalHeading title="Crowns and Bridges – The Ultimate Tooth Restoration" type="h2" />
                                                <Box mt={3} className="d-flex flex-md-row flex-column">
                                                    <Box style={{ width: width > 600 ? "40%" : "100%" }}>
                                                        {
                                                            [`A dental crown is a tooth-shaped “cap” that fits snuggly over a tooth, completely covering it. Usually a crown is required to restore the size, shape, strength, or appearance of a tooth. Crowns fix these issues by encasing the visible portion of the tooth that lies above the gumline.`].map((item, index) => <Typography key={`cnb-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                        }
                                                    </Box>
                                                    <Box style={{ width: width > 600 ? "40%" : "100%" }}>
                                                        <img src={crownBridges} alt="Crown Bridge Carrum Downs" title="Crown Bridge Carrum Downs" className='img-fluid' loading="lazy" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="A Crown may be needed in the following situations" type="h2" />
                                                <Box mt={3}>
                                                    {
                                                        [{ id: "crowns-and-bridge-sec2-subSec1", title: "Defective Large Old Fillings.", para: "If a large, old filling is decayed, leaking, defective, or broken and needs replacement, sometimes the tooth cannot securely hold an even larger filling, and a crown is needed to fill out the tooth’s shape.", type: "h3" }, { id: "crowns-and-bridge-sec2-subSec2", title: "Broken Teeth", para: "If there is insufficient remaining natural tooth structure to hold a filling, a crown is needed.", type: "h3" }, { id: "crowns-and-bridge-sec2-subSec3", title: "Root Canal Treated Teeth", para: "Back teeth that have had a root canal should almost always be capped to prevent the weakened root canal-treated tooth from suffering catastrophic cracks.", type: "h3" }, { id: "crowns-and-bridge-sec2-subSec4", title: "Mal aligned Teeth", para: "We can sometimes do instant orthodontics by preparing mal aligned front teeth and inserting crowns over top in a more ideal position to give you a beautiful smile.", type: "h3" }].map(item => <Box mb={3}>
                                                            <SectionalHeading title={item.title} type="h3" color1="#000" />
                                                            <Typography className="customPara">{item.para}</Typography>
                                                        </Box>)
                                                    }
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='GreySec Rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <Box>
                                                    <SectionalHeading title="What are crowns made from?" />
                                                    <Typography className='customPara'>Crowns can be made from a variety of materials. They can be made from plastic, ceramic or metal alloys. A combination of metal and ceramic is also possible to maximise strength and simulate the appearance of natural teeth.</Typography>
                                                </Box>
                                                <Box className='mt-md-5 mt-4'>
                                                    <SectionalHeading title="Procedure followed at Carrum Downs Dental Group for your Crown preparation" />
                                                    <Box mt={3}>
                                                        <List>
                                                            {
                                                                [{ id: "crowns-and-bridge-sec4-listItem1", text: "On your first visit a thorough clinical examination is conducted by the dentist with radiographs. During this time the suitability of the crown is assessed and any preparatory work is undertaken. Your dentist will explain the treatment sequence, material choices and will answer your concerns." }, { id: "crowns-and-bridge-sec4-listItem2", text: "On your second visit, the teeth receiving crown is prepared. This involves reduction of the tooth size (usually under local anaesthesia) followed by an impression or mould of the prepared tooth. This trimming of the tooth is required to create space for the crown to be fitted. The mould taken is then sent to a laboratory where skilled technicians will fabricate the crown. In the meantime, a temporary crown is made and fitted onto the trimmed tooth." }, { id: "crowns-and-bridge-sec4-listItem3", text: "On the third visit, the temporary crown is removed and the tooth surface is cleaned. The completed crown is tied on to the teeth, checked for correct bite fit and appearance. The crown is strongly cemented to the teeth." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                            }
                                                        </List>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Bridges" type="h2" />
                                                <Typography className='customPara'>A bridge is designed to literally bridge a gap between one or more missing teeth. A bridge is cemented to the teeth adjacent to the gap.</Typography>
                                                <Box mt={3}>
                                                    <List>
                                                        {
                                                            [{ id: "crowns-and-bridge-sec5-listItem1", text: "Restores your natural beautiful smile. Bridges are designed to restore the aesthetics of your smile and Bridges help maintain the shape of your face so that cheeks do not sink where teeth are missing. And they can prevent teeth from drifting out of position." }, { id: "crowns-and-bridge-sec5-listItem2", text: "Restored functionality of your mouth. Bridges help restore the functionality of the mouth, allowing you to eat and speak properly. Bridges can help distribute bite forces by replacing missing teeth" }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                                        }
                                                    </List>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Procedure followed at Carrum Downs Dental Group for your Bridge preparation" type="h2" />
                                                <Box mt={3}>
                                                    <Box className="embed-responsive embed-responsive-16by9">
                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/cAAq6NWuWQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='GreySec Rounded mt-md-5 mt-4'>
                                            <Box p={3}>
                                                <SectionalHeading title="Similar to Crown, Bridge preparation also needs three visits." type="h2" />
                                                <Box mt={3}>
                                                    {
                                                        [{ id: "crowns-and-bridge-listItem1", text: "On your first visit a thorough clinical examination is conducted by the dentist with radiographs. During this time the suitability of the bridge is assessed and any preparatory work is undertaken. Your dentist will explain the treatment sequence, material choices and will answer your concerns." }, { id: "crowns-and-bridge-listItem2", text: "On your second visit, the teeth that serve as abutments are prepared for their crown. After the tooth has been reshaped, an impression of the area will be made. These impressions are used to fabricate a custom bridge. Your dentist may make a temporary bridge for you to wear in order to protect the exposed teeth and gums while your bridge is being made." }, { id: "crowns-and-bridge-listItem3", text: "On the third visit, the temporary bridge is removed and the tooth surface is cleaned. The completed bridge is tied on to the teeth, checked for correct bite fit and appearance. The bridge is strongly cemented to the teeth." }].map(listItem => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
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
                                                            [{ id: "crowns-and-bridge-faq1", que: "How long do a bridge and crown last?", ans: "A crown or bridge should last between 7 to 8 years. A correctly done crown and bridge could even last for a decade if the person is keen on oral hygiene and checks with the dentist every year for cleaning and follow-up. Although rare, well-maintained crowns and bridges could last a lifetime." }, { id: "crowns-and-bridge-faq2", que: "How many types of dental crowns are there?", ans: "Dental crowns are of four different types: Ceramic (porcelain-based), Porcelain fused to metal, gold alloys and base metal alloys." }, { id: "crowns-and-bridge-faq3", que: "Can we floss the crowns and bridges?", ans: "Yes. You should brush and floss your crown and bridge regularly to keep your mouth clean. However, during the first 24 hours after being placed, do not pull the thread through the gumline as this can loosen the crown." }].map(item =>
                                                                <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
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
                                                <ServiceBlog category={'dental-crowns'} />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar slug={'/service/crowns-and-bridge/'} isFormAvailable={false} />
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

export default CrownsNBridges