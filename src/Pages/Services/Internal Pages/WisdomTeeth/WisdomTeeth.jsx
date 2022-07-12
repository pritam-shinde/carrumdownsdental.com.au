import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BlueBtn, InterestFree, PaymentOpt, SectionalHeading, SimpleHero, Sidebar, BookNow, ServiceBlog } from '../../../../Components/Components';
import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Grid, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Slider1 from './Images/wisdom-tooth-x-ray.jpg';
import Slider2 from './Images/wisdom-x-ray.jpg';
import Slider3 from './Images/new-wisdom-tooth-x-ray.jpg';
import Slider4 from './Images/wisdom-tooth-improper-positioning.jpg';
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


const WisdomTeeth = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <Helmet>
                <meta name="title" content="Your Survival Guide To Wisdom Tooth Extraction | Infographic" />
                <meta name="description" content="We have an infographic for Wisdom Teeth Removal Survival Guide with tips and instructions on what to expect and how to handle this often painful time. Learn more!" />
                <title>Your Survival Guide To Wisdom Tooth Extraction | Infographic</title>
            </Helmet>
            <SimpleHero pageTitle="Wisdom Teeth Removal in Carrum Downs" />
            <main>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={11} md={10} className="mx-auto">
                                <Box py={5}>
                                    <Grid container spacing={10} >
                                        <Grid item xs={12} lg={8}>
                                            <Box>
                                                <section>
                                                    <Box>
                                                        <SectionalHeading title="Wisdom Tooth and Other Surgical Extractions" type="h2" />

                                                        <Box>
                                                            {
                                                                [`<strong style="color: var(--blue)">“Come along for an opinion. Most complex extractions can be managed successfully on site, without the need of a hospital visit.”</strong>`, `Carrum Downs Dental Group’s general dentists are specialised in Wisdom tooth, Impacted and Surgical extractions.We can remove your wisdom teeth in a caring way to relieve you of the pain and aches.`, `We only recommend the removal of wisdom teeth if they are impacted or infected. The extraction is straightforward if the Wisdom tooth is straight and is not impacted and the <strong style="color: var(--blue)">costs for this will be from $200*</strong>.`, `A minor surgery (including sectioning the bones) will be required for Impacted and horizontally growing tooth. The cost for this extraction <strong>starts from $300*</strong> and depends on the Impaction.`, `In a very few circumstances, it may be too difficult to remove the tooth at our practice and in these cases we may refer patients to a specialist oral surgeon who is skilled in dealing with most complex cases. You can <strong>email us your OPG/X-Ray</strong> and we can advise you if we can remove it and can also provide you with the approximate cost`].map((item, index) => <Typography key={`wisdom-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                            }
                                                        </Box>
                                                        <Box my={3}>
                                                            <Swiper
                                                                spaceBetween={30}
                                                                effect={"fade"}
                                                                navigation={true}
                                                                pagination={{
                                                                    clickable: true,
                                                                }} className="slide-text mySwiper"
                                                                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                                                                loop={true}
                                                                slidesPerView={1}
                                                                autoplay={{
                                                                    delay: 5000,
                                                                    disableOnInteraction: false,
                                                                }}
                                                            >
                                                                {
                                                                    [{ id: "wisdom-teeth-sec1-slider1", image: Slider1, alt: "Wisdom Tooth X-Ray", title: "" }, { id: "wisdom-teeth-sec1-slider2", image: Slider2, alt: "Wisdom Teeth Carrum Downs", title: "" }, { id: "wisdom-teeth-sec1-slider3", image: Slider3, alt: "New Wisdom Tooth X-Ray", title: "" }, { id: "wisdom-teeth-sec1-slider4", image: Slider4, alt: "Wisdom Tooth Improper Positioning", title: "" }].map(item => <SwiperSlide key={item.id}>
                                                                        <img src={item.image} alt={item.alt} className="img-fluid" title={item.title} />
                                                                    </SwiperSlide>)
                                                                }
                                                            </Swiper>
                                                        </Box>
                                                        <Box mt={3}>
                                                            <BlueBtn link='/book-now/' title="Book An Appointment" />
                                                            <BlueBtn anchor="tel: 03-9782 1200" title="Call Now" />
                                                        </Box>
                                                    </Box>
                                                </section>
                                                <section className='GreySec rounded mt-md-5 mt-4'>
                                                    <Box p={3}>
                                                        <SectionalHeading title="Symptoms requiring Wisdom tooth extraction." type="h2" />
                                                        <Box>
                                                            <List>
                                                                {
                                                                    [{ id: "wisdom-teeth-sec2-listItem1", text: "The Wisdom teeth dint fully erupt and is causing Impaction or overcrowding." },
                                                                    { id: "wisdom-teeth-sec2-listItem2", text: "Chronic pain in your gums around the wisdom tooth. The pain is caused because of food and bacteria getting trapped in between impacted teeth." },
                                                                    { id: "wisdom-teeth-sec2-listItem3", text: "Wisdom teeth did not come out straight and cause your teeth to shift and move over time." },
                                                                    { id: "wisdom-teeth-sec2-listItem4", text: "Wisdom teeth causing decay of the adjacent tooth. Due to the location of the Wisdom tooth" }].map(listItem => <ListItem key={listItem.id}>
                                                                        <ListItemIcon>
                                                                            <CheckCircleOutline style={{ color: "var(--light-green)" }} />
                                                                        </ListItemIcon>
                                                                        <ListItemText primary={listItem.text} />
                                                                    </ListItem>)
                                                                }
                                                            </List>
                                                        </Box>
                                                    </Box>
                                                    <Box p={3}>
                                                        <SectionalHeading title="What happens during your Wisdom tooth extraction?" type="h2" />
                                                        <Box mt={3}>
                                                            {
                                                                [`Prior to the surgery your dentist will discuss with you the procedure and will let you know what to expect during and after the procedure. A local anaesthetic will be given to numb the area around the wisdom tooth so you do not feel any pain. To remove the wisdom tooth, your dentist will remove the gum tissue or bone over your tooth. The wisdom tooth is either extracted or cut in to small pieces to make way for easier removal. Stitches may be required after the extraction. The dentist will advise if all of the wisdom teeth can be removed in a single or multiple sitting.`, `If you are Anxious about getting the dental treatment done, we can also provide Laughing Gas or Happy Gas sedation to help reduce your pain and anxiety during the treatment.`].map((item, index) => <Typography key={`wisdom-sec3-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                            }
                                                        </Box>
                                                    </Box>
                                                </section>
                                                <section style={{ marginTop: "3.5rem" }}>
                                                    <PaymentOpt />
                                                </section>
                                                <section className='mt-md-5 mt-4'>
                                                    <Box className='faq'>
                                                        <SectionalHeading title="Frequently Asked Questions (FAQs)" type="h2" align1="center" />
                                                        <Box mt={3}>
                                                            <Box className="accordion bg-white border-0" id="accordionExample">
                                                                {
                                                                    [{ id: "wisdom-faq-1", que: "Why are wisdom teeth removed?", ans: "A wisdom tooth can be removed for various reasons, such as a wisdom tooth that failed to erupt fully, chronic pain on the gums around the wisdom tooth, a tooth that didn’t come out straight or a wisdom tooth causing decay to the adjacent teeth." }, { id: "wisdom-faq-2", que: "Does Medicare cover wisdom teeth removal?", ans: "Yes, wisdom teeth removal is covered under Medicare for eligible Kids under the CDBS Program." }, { id: "wisdom-faq-3", que: "What to eat after wisdom teeth removal?", ans: "Following wisdom teeth removal, you should eat soft foods and liquids such as yoghurt, mashed potatoes, pudding and smoothies. Cold foods like ice cream can offer relief." }, { id: "wisdom-faq-4", que: "How long are you swollen after wisdom teeth removal?", ans: "Typically, your mouth and cheeks may have a swelling that lasts 1 to 2 days and stiffness that could last for up to a week." }].map(item =>
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
                                                        <ServiceBlog category={'wisdom-teeth'} />
                                                    </Box>
                                                </section>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} lg={4}>
                                            <Sidebar slug={'/service/wisdom-teeth-removal/'} isFormAvailable={true} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default WisdomTeeth