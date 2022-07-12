import { Container, Grid, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BookNow, Sidebar, SimpleHero, InterestFree, SectionalHeading, ServiceBlog, PaymentOpt, BlueBtn, TnCLink } from '../../../../Components/Components';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import teetWhitening from './images/zoom-w.jpeg';
import poladay from './images/poladay-1024x569.jpg';
import polaNight from './images/polanight-973x1024.jpg';
import agingAfter from './images/aging after.jpg';
import agingBefore from './images/aging before.jpg'
import geneticAfter from './images/genetic after.jpg';
import geneticBefore from './images/fenetic before.jpg';
import smokingAfter from './images/smoking after.jpg';
import smokingBefore from './images/smoking before.jpg';
import polaTeethWhitening from './images/pola-teeth-whitening-213x383.png';

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

const TeethWhitening = () => {
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    const [width, setWidth] = useState()

    useEffect(() => setWidth(window.innerWidth), [width]);

    const breadcrumb = [{ id: "breadcrumb-11.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-11.2", link: null, text: "TEETH WHITENING IN CARRUM DOWNS" }]

    return (
        <>
            <Helmet>
                <meta name="title" content="Teeth Whitening in Carrum Downs | Carrum Downs Dentist" />
                <meta name="description" content="Teeth Whitening is the most effective way to restore the whiteness of your tooth. We use Pola Whitening system to remove the discoloration." />
                <title>Teeth Whitening in Carrum Downs | Carrum Downs Dentist</title>
            </Helmet>
            <SimpleHero pageTitle="Teeth Whitening in Carrum Downs" breadCrumb={breadcrumb} />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={11} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={10}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Box>
                                                <SectionalHeading title="Teeth Whitening – Whiter Brighter You" type="h2" />
                                                <Typography className="customPara">Has your tooth enamel discoloured? Teeth Whitening is one of the most effective ways to remove the discolouration, leaving with a Whiter, Brighter and Fresher looking smile.</Typography>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Zoom Teeth Whitening" type="h2" />
                                                <Typography className='customPara'>Regular brushing and flossing are one of the best ways to keep your teeth white, bright, and healthy. However, if you feel like your smile is missing some sparkle, or is a bit yellow than it used to be, you are not alone. A bright and sparkling smile always makes a difference when it comes to your appearance. It is the very first thing people notice about you when you enter a room.</Typography>
                                                <Box my={3}>
                                                    <img src={teetWhitening} alt="teeth whitening" title="teeth whitening" className="img-fluid" loading="lazy" />
                                                </Box>
                                                <Box>
                                                    {
                                                        [`Naturally, teeth discolour from factors such as wear and tear, some habits such as drinking, smoking as well as eating certain types of foods or using certain medications. However, this does not mean you are stuck with your unsightly, discoloured teeth.`, `All thanks to professional teeth whitening, you can now achieve your dream smile in a safe environment. This article takes a look at zoom teeth whitening.`].map((item, index) => <Typography key={`teeth-whitening-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="What Is Zoom Teeth Whitening?" type="h2" />
                                                <Box my={3}>
                                                    <Grid container spacing={3}>
                                                        {
                                                            [{ id: "teeth-whitening-sec3-image1", image: geneticBefore, alt: "genetic Teeth Whitening", title: "genetic Teeth Whitening" }, { id: "teeth-whitening-sec3-image2", image: geneticAfter, alt: "genetic Teeth Whitening", title: "genetic Teeth Whitening" }].map(item => <Grid item xs={12} md={6}>
                                                                <img src={item.image} alt={item.alt} title={item.title} className="img-fluid" loading="lazy" />
                                                            </Grid>)
                                                        }
                                                    </Grid>
                                                </Box>
                                                <Box>
                                                    {
                                                        [`Zoom teeth whitening is a form of laser treatment widely used throughout the country and across the globe. It helps in lightening the stain or discolouration of the enamel. The process uses the advanced zoom power chairside lamp and a hydrogen peroxide whitening gel that accelerates the bleaching process.`, `The process is simple and non-invasive. It takes 45 minutes to one hour to complete. You can achieve 8 to 15 shades of whiter teeth with just one treatment.`].map((item, index) => <Typography key={`teeth-whitening-sec2-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                                <Box mt={3}>
                                                    <Box className="embed-responsive embed-responsive-16by9">
                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hro29kh8l6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="How Does It Work?" type="h2" />
                                                <Box my={3}>
                                                    <Grid container spacing={3}>
                                                        {
                                                            [{ id: "teeth-whitening-sec4-image1", image: agingBefore, alt: "Aging Teeth Whitening", title: "Aging Teeth Whitening" }, { id: "teeth-whitening-sec4-image2", image: agingAfter, alt: "Aging Teeth Whitening", title: "Aging Teeth Whitening" }].map(item => <Grid item xs={12} md={6}>
                                                                <img src={item.image} alt={item.alt} title={item.title} className="img-fluid" loading="lazy" />
                                                            </Grid>)
                                                        }
                                                    </Grid>
                                                </Box>
                                                <Box>
                                                    {
                                                        [`
                                                        The dentist uses a high concentration of hydrogen peroxide gel to cover your teeth enamel. When the hydrogen peroxide comes into contact with the light from the chairside lamp, it breaks down to a thin layer over the enamel. It then releases oxygen to the teeth, which helps flush out all the teeth discolouration.`, `Before taking the procedure, the dentist will walk you through all about the whole procedure and what to expect. During the consultation, you can let the dentist know about your goals. You will also discuss other teeth whitening options so that you can make an informed decision.`, `After the procedure, the dentist will let you know some aftercare treatment you should follow to make sure that the results last for a long time. Of course, it is vital to know that you cannot eat or drink anything immediately after the procedure. It is also discouraged to continue with habits such as smoking. You might experience some sensitivity after the treatment, but your dentist will discuss some remedies for that.`].map((item, index) => <Typography key={`teeth-whitening-sec4-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="Benefits of Zoom Teeth Whitening" type="h2" />
                                                <Box my={3}>
                                                    <Grid container>
                                                        {
                                                            [{ id: "teeth-whitening-sec5-image1", image: smokingBefore, alt: "Smoking Teeth Whitening", title: "Smoking Teeth Whitening" }, { id: "teeth-whitening-sec5-image2", image: smokingAfter, alt: "Smoking Teeth Whitening", title: "Smoking Teeth Whitening" }].map(item => <Grid item xs={12} md={6}>
                                                                <img src={item.image} alt={item.alt} title={item.title} className="img-fluid" loading="lazy" />
                                                            </Grid>)
                                                        }
                                                    </Grid>
                                                </Box>
                                                <Box>
                                                    {
                                                        [`Zoom teeth whitening is an easy and quick treatment. In less than an hour, you’ll have achieved your teeth whitening goals. This is a huge advantage over other methods such as at-home whitening that requires you to diligently use the treatment for a few weeks.`, `It is also a type of treatment that achieves high-quality results. With this treatment, you will achieve eight to fifteen shades in one session. You can schedule a second meeting with your dentist to achieve even a brighter smile.`, `The process is also safe, non-invasive, and painless. Zoom teeth whitening technology is considered one of the safest and fastest dental procedures you can undergo. The dentist will add special protection to keep your lips, cheeks, and gums safe during the procedure.`].map((item, index) => <Typography key={`teeth-whitening-sec4-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className="GreySec rounded mt-md-5 mt-4">
                                            <Box p={3}>
                                                <SectionalHeading title="Visit Us Today Professional Teeth Whitening" type="h2" />
                                                <Typography className='customPara'>If your teeth are stained or discoloured, and you feel like it is time to take action, our dentist is here to help. Our dentist is well trained and has years of experience to offer such treatment. We will whiten your teeth, boost your aesthetics and enhance your confidence.</Typography>
                                            </Box>
                                        </section>
                                        <section className="mt-md-5 mt-4">
                                            <Box>
                                                <SectionalHeading title="Pola Whitening – the Quickest Way to Whiten Your Teeth" type="h2" align1="center" />
                                                <Box mt={3}>
                                                    {
                                                        [`<span style="color: var(--blue)">Our take home Pola Whitening System normally <del>$400*</del> for $299*</span>`, `At Carrum Downs Dental Group on Frankston-Dandenong Road we use Pola Teeth Whitening system which will restore the natural whiteness of your tooth easily, comfortably and with utmost convenience. Treatment is pain free and very often results can be seen from the first application.`, `Pola tooth whitening is available for use in the surgery or as a handy ‘home-use’ kit.`, `Our in-surgery whitening is powerful and will give visible results in a much quicker time. In fact, Pola Office + is one of the world’s fastest whitening treatments, dramatically lightening the enamel in as little as 30 minutes. Often, a UV light is not even necessary to help speed up the process.`, `This type of treatment is ideal for those with heavy staining or who would prefer the convenience of one appointment rather than having to take a kit home with them.`, `With Pola Office we can fully protect your gums before treatment with a flexible and easily placed barrier. One thin layer of bleach is all that is required for noticeable results. Thanks to the composition of the gel it stays in place on your teeth for maximum effect. As an added bonus, the unique whitening bleach contains potassium nitrate, which actually helps to prevent increased tooth sensitivity, a common side-effect in many other types of treatment.`].map((item, index) => <Typography key={`teeth-whitening-sec7-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                                <Box className='d-flex flex-md-row flex-column'>
                                                    <Box style={{ width: width > 600 ? "60%" : "100%" }}>
                                                        {
                                                            [`If you would prefer a home kit, for use at your own convenience, we can provide Pola day or Pola night. Using impressions of your teeth we will manufacture special trays for the top and bottom teeth. Full instructions will be given when you take your product away from the practice. Simply wear your trays with the bleaching gel for between 15 and 30 minutes a day.`, `It can take up to 2 weeks for full effect but many patients can see a difference within just a few days.`].map((item, index) => <Typography key={`teeth-whitening-sec7-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                        }
                                                    </Box>
                                                    <Box style={{ width: width > 600 ? "40%" : "100%" }}>
                                                        <img src={polaTeethWhitening} alt="pola-teeth-whitening" title="pola-teeth-whitening" className='img-fluid ml-2' loading="lazy" />
                                                    </Box>
                                                </Box>
                                                <Box>
                                                    {
                                                        [`The pleasant tasting spearmint flavoured gels contain a unique formula which helps to hydrate, soothe and condition your tooth enamel, decreasing sensitivity and plaque build-up. In fact, it’s highly likely your teeth will feel healthier and stronger after treatment.`, `Thanks to the thickness of the gel you can be assured that every tooth is fully and evenly covered.`].map((item, index) => <Typography key={`teeth-whitening-sec7-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                    }
                                                </Box>
                                                <Box mt={3}>
                                                    <BlueBtn link='/book-now/' title="Book An Appointment" />
                                                    <BlueBtn anchor="tel: 03-9782 1200" title="Call Now" />
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className="GreySec rounded mt-md-5 mt-4">
                                            <Box p={3}>
                                                <Box>
                                                    <SectionalHeading title="The Safety of Tooth Whitening" type="h2" />
                                                    <Typography className='customPara'>Tooth whitening is highly safe and suitable for use on the majority of people. Provided it is carried out by a registered, qualified and experienced dentist the risks of damage are minimal. We would always advise that you avoid whitening kits that can be bought online, as these are usually unregulated and therefore illegal. Often it is impossible to tell what is contained in such kits, meaning they could cause serious damage to your teeth and gums.</Typography>
                                                </Box>
                                                <Box className='mt-md-5 mt-4'>
                                                    <SectionalHeading type="h2" title="What Sort of Whitening Treatment Do I Need?" />
                                                    <Box mt={3}>
                                                        {
                                                            [`Everyone is different and we can advise you following a consultation and full check of your teeth.`, `Bear in mind that manufactured teeth or restorations such as crowns, fillings, dentures and bridges can’t be whitened. They can however be replaced (at an additional cost) to match the shade of your new teeth.`].map((item, index) => <Typography key={`teeth-whitening-sec9-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                                                        }
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box>
                                                <SectionalHeading title="How to Use Take Home Pola Kits?" type="h2" />
                                                <Box>
                                                    <SectionalHeading title="POLADAY" type="h4" />
                                                    <Typography className='customPara'>Whiter smile! Our Dentist will make custom fitted trays to allow you to whiten your smile at home during the day. You can wear the trays with Pola Day inside for as little as 30 minutes a day (depending on the concentration your dentist supplies you with). You repeat this procedure for about 5 – 10 days depending on requirements. Whiten your teeth before you go to work, cleaning the house or whilst cooking for the family!</Typography>
                                                    <Box my={3}>
                                                        <img src={poladay} alt="POLADAY - Home Pola Kits" title="POLADAY - Home Pola Kits" className='img-fluid' loading="lazy" />
                                                    </Box>
                                                </Box>

                                                <Box className='mt-md-5 mt-4'>
                                                    <SectionalHeading title="POLANIGHT" type="h4" />
                                                    <Typography className='customPara'>Our Dentist will make custom fitted trays to allow you to whiten your smile at home whilst you sleep. You can wear the trays with Pola Night inside overnight or for as little as 40 minutes a day (depending on the concentration your doctor supplies you with). You repeat this procedure for about 5 – 10 nights depending on requirements</Typography>
                                                    <Box my={3}>
                                                        <img src={polaNight} alt="POLANIGHT - Home Pola Kits" title="POLANIGHT - Home Pola Kits" className='img-fluid' loading="lazy" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </section>
                                        <section style={{ marginTop: "3.5rem" }}>
                                            <PaymentOpt />
                                            <TnCLink/>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Box className="faq">
                                                <SectionalHeading title="Frequently Asked Questions (FAQs)" type="h2" color="#000" />
                                                <Box mt={3}>
                                                    <Box className="accordion" id="accordionExample">
                                                        {
                                                            [{ id: "teeth-whitening-faq1", que: "How much does teeth whitening cost?", ans: "Teeth-whitening cost varies depending on budget and preference. At-home teeth whitening kits are the best alternative to brighten the smile, but this may take more time. For speedy whitening results, you can try the professional in-office whitening option, which is more expensive but highly effective." }, { id: "teeth-whitening-faq2", que: "Is teeth whitening safe?", ans: "A majority of people can safely use teeth whitening, provided an experienced dentist is involved. You could also use at-home kits, but you should also be careful to avoid unregulated kits that could cause severe damage to your teeth and gums." }, { id: "teeth-whitening-faq3", que: "Does baking soda whiten teeth?", ans: "Baking soda is a popular ingredient in many commercial kinds of toothpaste due to its natural whitening properties. It is a safe and effective option to whiten the smile." }, { id: "teeth-whitening-faq4", que: "What to eat after teeth whitening?", ans: "In the first couple of days of having your teeth whitened, avoid highly acidic foods and those with pigments and chemicals. Try fish, chicken, yoghurt, Rice, Pasta, white cheese, leafy veggies and water. Avoid wine, coffee and teas, soft drinks, dark fruits, candy and smoking." }, { id: "teeth-whitening-faq5", que: "Can grey teeth be whitened?", ans: "Grey teeth that are still strong can be whitened using a take-home solution or dental treatments. However, the results will be determined by the cause and extent of discoloration." }].map(item => <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
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
                                                <ServiceBlog category={'teeth-whitening'} />
                                            </Box>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Sidebar slug={'/service/teeth-whitening/'} isFormAvailable={false} />
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

export default TeethWhitening