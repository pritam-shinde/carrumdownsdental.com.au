import { Container, Grid, Box, Typography, List } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { AboutOurClient, Insurance, InterestFree, ListItemComp, PaymentOpt, SectionalHeading, SimpleHero, } from '../../Components/Components';
import Data from './Data/Data';

const PPC = () => {

  const location = useLocation();

  let [filter] = Data.filter(entries => entries.slug === location.pathname)

  return (
    <>
      <Helmet>

      </Helmet>
      <SimpleHero pageTitle="Dental Emergency" ppc={true} ppcText="The Ultimate Tooth Restoration" />
      <main>
        <Container maxWidth="xxl" className='px-0'>
          <Box py={5}>
            <Grid container>

              {
                filter ? filter.content ? filter.content.map(section => section.grid.length > 0 ? <Grid item xs={12} className="mx-auto" style={{ backgroundColor: "#eee" }}>

                  <Box>
                    <Grid container>
                      <Grid item xs={11} md={10} className="mx-auto">
                        <Box py={5}>
                          <Grid container spacing={10}>
                            {
                              section.grid.map(gridItem => <Grid item xs={12} md={6}>
                                <SectionalHeading title={gridItem.title ? gridItem.title : ""} type={gridItem.titleType ? gridItem.titleType : ""} />
                                {
                                  gridItem.para.length > 0 ? gridItem.para.map((para, index) => <Typography key={`${gridItem.id}para-${index}`} dangerouslySetInnerHTML={{ __html: para }} className="customPara" />) : null
                                }
                                {
                                  gridItem.list.length > 0 ? <List>
                                    {
                                      gridItem.list.map((listItem) => <ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                                    }
                                  </List> : null
                                }
                              </Grid>)
                            }
                          </Grid>
                        </Box>

                      </Grid>
                    </Grid>
                  </Box>
                </Grid> : null) : null : null
              }

              {
                filter ? filter.content ? filter.content.map(section => section.component !== null ? <Grid item xs={11} md={10} className="mx-auto mt-md-5 mt-4">
                  <Box className='text-center'>
                    <InterestFree />
                  </Box>
                </Grid> : null) : null : null
              }

              <Grid item xs={12} className="mt-md-5 mt-4" style={{ backgroundColor: "#eee" }}>
                <Box py={5}>
                  <Grid container>
                    <Grid item xs={11} md={10} className="mx-auto">
                      <AboutOurClient />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={11} md={10} className="mx-auto">
                <section className='mt-md-5 mt-4'>
                  <Box py={5}>
                    <PaymentOpt />
                  </Box>
                </section>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </>
  )
}

export default PPC