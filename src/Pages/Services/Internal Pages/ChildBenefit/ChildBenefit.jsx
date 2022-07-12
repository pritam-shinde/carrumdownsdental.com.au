import { Box, Container, Grid, List, Typography} from '@mui/material'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { BookNow, SectionalHeading, Sidebar, SimpleHero, ListItemComp, PaymentOpt, InterestFree, BlueBtn, ServiceBlog, TnCLink } from '../../../../Components/Components';
import childBenefitImg from './images/close-up-boy-dentist.41e0e9504e92a363b8e5.jpg'

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

const ChildBenefit = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const breadcrumb= [{ id: "breadcrumb-2.1", link: "/service/", text: "SERVICES" }, { id: "breadcrumb-2.2", link: null, text: "CHILD BENEFIT" }]
  return (
    <>
      <Helmet>
        <meta name="title" content="Child Dentist Carrum Downs | CDBS Carrum Downs | Child Benefit" />
        <meta name="description" content="CDBS schedule allows child dental services for the kids between 2-17 years. Child dentists in Carrum Downs carry out the dental treatment very gently." />
        <title>Child Dentist Carrum Downs | CDBS Carrum Downs | Child Benefit</title>
      </Helmet>
      <SimpleHero pageTitle="Child Benefit" breadCrumb={breadcrumb}  />
      <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={11} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={10}>
                  <Grid item xs={12} lg={8}>
                    <Box>
                      <section>
                        <Box>
                          <Box mb={3}>
                            <img src={childBenefitImg} alt="child benefit dental treatment - CDBS" title='child benefit dental treatment - CDBS' className='img-fluid' loading="lazy" />
                          </Box>
                          <Box>
                            {
                              [`Thanks to the Australian Governments CDBS program. Eligible Kids between 2 – 17 years can get up to $1000* worth of dental services. Carrum Downs Dental Group on Frankston-Dandenong Road can BULK BILL treatment costs under this program for eligible kids.`, `If you are not sure if you are eligible just give us a call and provide your medicate number. We will be able to confirm if you are eligible.`, `At Carrum Downs Dental Group we have a play area for kids to engage themselves before the treatment. Also, during the treatment we can provide the child with distraction or entertainment with Kids channels or Movies while we gently complete the dental treatment.`].map((item, index) => <Typography key={`childBenefit-sec1-para${index}`} dangerouslySetInnerHTML={{ __html: item }} className="customPara" />)
                            }
                          </Box>
                        </Box>
                      </section>
                      <section className='GreySec rounded mt-md-5 mt-4'>
                        <Box p={3}>
                          <SectionalHeading type='h4' title='To be eligible:' />
                          <Box>
                            <List>
                              {
                                [{ id: "child-benefit-sec2-listItem1", text: "The child must be between 2–17 years old.", internalList: [] },
                                { id: "child-benefit-sec2-listItem2", text: "Have a Medicare card", internalList: [] },
                                {
                                  id: "child-benefit-sec2-listItem3", text: "The child’s family receives Family Tax Benefit Part A or one of the following Australian Government payments:", internalList: [
                                    { id: "child-benefit-sec2-listItem3.1", text: "Youth Allowance", },
                                    { id: "child-benefit-sec2-listItem3.2", text: "ABSTUDY", },
                                    { id: "child-benefit-sec2-listItem3.3", text: "Disability Support Pension", },
                                    { id: "child-benefit-sec2-listItem3.4", text: "Parenting Payment", },
                                    { id: "child-benefit-sec2-listItem3.5", text: "Special Benefit", },
                                    { id: "child-benefit-sec2-listItem3.6", text: "Carer Payment", },
                                    { id: "child-benefit-sec2-listItem3.7", text: "Double Orphan Pension", },
                                    { id: "child-benefit-sec2-listItem3.8", text: "Veteran’s Children Education Scheme, if the child is 16 or over", },
                                    { id: "child-benefit-sec2-listItem3.9", text: "Military Rehabilitation and Compensation Act Education and Training Scheme, if the child is 16 or over" }
                                  ]
                                }].map(listItem => {
                                  return (<>
                                    <ListItemComp key={listItem.id} text={listItem.text} />
                                    {
                                      listItem.internalList.length > 0 ? <List className="pl-5">
                                        {
                                          listItem.internalList.map(item => <ListItemComp key={item.id} text={item.text} />)
                                        }
                                      </List> : null
                                    }
                                  </>)
                                })}
                            </List>
                          </Box>
                          <Box mt={3}>
                            <BlueBtn link='/book-now/' title="Book An Appointment" />
                            <BlueBtn anchor="tel: 03-9782 1200" title="Call Now" />
                          </Box>
                        </Box>
                      </section>
                      <section className='mt-md-5 mt-4'>
                        <Box>
                          <SectionalHeading title="How to Claim the Child Benefit" type="h4" />
                          <Box mt={3}>
                            {
                              [{ id: "child-benefit-sec3-listItem1", prefix: null, text: "Just book an appointment with us and let us know if you are eligible for claiming this benefit. If you are unsure we can check the eligibility on your behalf with you Medicare card number.", icon: true, internalList: [] }, { id: "child-benefit-sec3-listItem2", prefix: null, text: "Bring your medicare card along for your appointment", icon: true, internalList: [] }, { id: "child-benefit-sec3-listItem3", prefix: null, text: "After your appointment we will bulk bill your treatment costs and this means you don’t need to pay from your pocket.", icon: true, internalList: [] }].map(listItem => {
                                return (<>
                                  <ListItemComp key={listItem.id} text={listItem.text} />
                                  {
                                    listItem.internalList.length > 0 ? <List className="pl-5">
                                      {
                                        listItem.internalList.map(item => <ListItemComp key={listItem.id} text={listItem.text} />)
                                      }
                                    </List> : null
                                  }
                                </>)
                              })
                            }
                          </Box>
                        </Box>
                      </section>
                      <section style={{ marginTop: "3.5rem" }}>
                        <Box>
                          <PaymentOpt />
                          <TnCLink />
                        </Box>
                      </section>
                      <section className='mt-md-5 mt-4 faq'>
                        <Box className='faq'>
                          <SectionalHeading title='Frequently Asked Questions (FAQs)' type='h2' align1="center" color1={'#000'} />
                          <Box mt={3}>
                            {
                              [{ id: "panel1", que: "What services are covered under CDBS?", ans: "The Child Dental Benefits Schedule provides individual benefits for services such as examinations, x-rays. Fissure sealing, cleaning, root canals and extractions." }, { id: "panel2", que: "Does CDBS cover wisdom teeth removal?", ans: "Yes. People under CBDS are eligible for wisdom teeth removal through Medicare." }, { id: "panel3", que: "Is children’s dental covered by Medicare?", ans: "Absolutely. CDBS is a Medicare funding scheme that provides the eligible child with up to $1000 for dental costs of up to 2 calendar years." }].map(item=><Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
                              <AccordionSummary aria-controls={`${item.id}d-content`} id={`${item.id}d-header`}>
                                <Typography varaint="h3" >{item.que}</Typography>
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
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Sidebar slug={`/service/child-benefit/`} isFormAvailable={false} />
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

export default ChildBenefit