import { CheckCircleOutline } from '@mui/icons-material';
import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { SectionalHeading, SimpleHero, BlueBtn, ContactDetails, TnCLink, OtherServices } from '../Components';
import Data from './Data/Data';
import Breadcrumb from './Data/Breadcrumb';
import './Sass/CommonPage.css';

const CommonPage = ({ contactDetails }) => {
  const [pageData, setPageData] = useState([]);
  const [breadcrumbList, setBreadcrumbList] = useState([])
  const [width, setWidth] = useState()
  const location = useLocation();

  useEffect(() => {
    let page = Data.filter(entries => entries.slug === location.pathname);
    setPageData(page)
  }, [location.pathname])

  useEffect(() => setWidth(window.innerWidth), [width]);

  useEffect(() => {
    let breadCrumbData = Breadcrumb.filter(entries => entries.slug === location.pathname);
    setBreadcrumbList(breadCrumbData[0].links)
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta name="title" content={pageData ? pageData[0] ? pageData[0].seo ? pageData[0].seo[0] ? pageData[0].seo[0].title ? pageData[0].seo[0].title : null : null : null : null : null} />
        <meta name="description" content={pageData ? pageData[0] ? pageData[0].seo ? pageData[0].seo[0] ? pageData[0].seo[0].description ? pageData[0].seo[0].description : null : null : null : null : null} />
        <title>{pageData ? pageData[0] ? pageData[0].seo ? pageData[0].seo[0] ? pageData[0].seo[0].title ? pageData[0].seo[0].title : null : null : null : null : null}</title>
        <meta name="robots" content="index" />
        <link rel="canonical" href={`/${location.pathname}/`} />
      </Helmet>
      <SimpleHero pageTitle={pageData ? pageData[0] ? pageData[0].pageTitle ? pageData[0].pageTitle : null : null : null} breadCrumb={breadcrumbList}  />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container >
              <Grid item xs={11} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={contactDetails ? 10 : 0} >
                    <Grid item xs={12} lg={contactDetails ? 8 : 12} >
                      {
                        pageData ? <Box>
                          {
                            pageData[0] ? pageData[0].content ? pageData[0].content.map(pageSec => <Box className={pageSec.id === "payment-plans-sec5" ? 'shadow-lg rounded p-lg-5 p-3' : null} mb={3} key={pageSec.id}>
                              {
                                pageSec ? pageSec.title ? pageSec.title.map(item => <SectionalHeading key={item.id} title={item.title} type={item.type} align1={item.align ? item.align : "left"} />) : null : null
                              }
                              {
                                pageSec ? pageSec.subTitle ? pageSec.subTitle.map(item => <SectionalHeading key={item.id} title={item.title} type={item.type} />) : null : null
                              }
                              {
                                pageSec ? pageSec.images ? pageSec.images.length > 0 ? pageSec.images.map(item => {
                                  if (item.pos === "afterbegin") {
                                    return <Box key={item.id} className="text-center" >
                                      <img src={item.image} alt={item.alt} title={item.title} className={`img-fluid`} loading="lazy" />
                                    </Box>
                                  }
                                }) : null : null : null
                              }
                              {
                                pageSec ? pageSec.images ? pageSec.para ? pageSec.images && pageSec.para ? pageSec.images.length > 0 && pageSec.para.length > 0 ? pageSec.images.map(item => {
                                  if (item.pos === "withContent") {
                                    return <Box className={`withContent ${item.align} mt-3`}>
                                      <Box className='imageContainer mx-3' style={{ float: "left" }} >
                                        <img src={item.image} alt={item.alt} className="img-fluid" loading='lazy' />
                                      </Box>
                                      <Box className="text-container">
                                        {
                                          pageSec.para.map((para, index) => <Typography key={`${pageSec.id}-para${index}`} className="customPara" dangerouslySetInnerHTML={{ __html: para }} />)
                                        }
                                      </Box>
                                    </Box>
                                  } else if (item.pos === "afterbegin" || item.pos === "beforeend") {
                                    return <Box className="text-container mt-3">
                                      {
                                        pageSec.para.map((para, index) => <Typography key={`${pageSec.id}-para${index}`} className="customPara" dangerouslySetInnerHTML={{ __html: para }} />)
                                      }
                                    </Box>
                                  }
                                }) : null : null : null : null : null
                              }
                              {
                                pageSec ? pageSec.images.length === 0 && pageSec.para.length > 0 ? pageSec.para.map((para, index) => <Typography key={`${pageSec.id}-para${index}`} className="customPara" dangerouslySetInnerHTML={{ __html: para }} />) : null : null
                              }
                              {
                                pageSec ? pageSec.List ? pageSec.List.length > 0 ? <Box>
                                  <List>
                                    {
                                      pageSec.List.map(item => <ListItem key={item.id}>
                                        <ListItemIcon>
                                          <CheckCircleOutline style={{ color: 'var(--light-green)' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={item.prefix !== null ? item.prefix : item.text} secondary={item.prefix !== null && item.text ? item.text : null} />
                                      </ListItem>)
                                    }
                                  </List>
                                </Box> : null : null : null
                              }
                              {
                                pageSec ? pageSec.images ? pageSec.images.length > 0 ? pageSec.images.map(item => {
                                  if (item.pos === "beforeend") {
                                    return <Box key={item.id} className="text-center" >
                                      <img src={item.image} alt={item.alt} title={item.title} className={`img-fluid`} loading="lazy" />
                                    </Box>
                                  }
                                }) : null : null : null
                              }
                              {
                                pageSec ? pageSec.link ? pageSec.link.href !== null && pageSec.link.title !== null ? <BlueBtn anchor={pageSec.link.href} title={pageSec.link.title} /> : null : null : null
                              }
                            </Box>) : null : null
                          }
                        </Box> : null
                      }
                      {
                        pageData ? pageData[0] ? pageData[0].tnc ? <TnCLink /> : null : null : null
                      }
                    </Grid>
                    <Grid item xs={contactDetails ? 12 : 0} lg={contactDetails ? 4 : 0} >
                      {
                        contactDetails ? <Box style={{ height: "100%" }}><Box><ContactDetails /></Box><Box mt={5}><OtherServices /></Box></Box> : null
                      }
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

export default CommonPage