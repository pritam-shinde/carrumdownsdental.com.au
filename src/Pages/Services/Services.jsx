import { Container, Grid, Box } from '@mui/material';
import React from 'react'
import { Helmet } from 'react-helmet';
import { CustomCard, SimpleHero } from '../../Components/Components';
import Data from './Data/Data';
import './sass/services.css'

const Services = () => {
  return (
    <>
      <Helmet>
        <meta name="title" content="Services |" />
        {/* <meta name="description" content="" /> */}
        <title>Services |</title>
      </Helmet>
      <SimpleHero pageTitle="Services" />
      <main id="servicesPage">
        <section>
          <Container maxWidth="xxl">
            <Grid container >
              <Grid item xs={11} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3} >
                    {
                      Data.map(service=><Grid item xs={12} md={6} lg={4} >
                        <CustomCard title={service.title} para={service.excerpt} cardCls="bg-transparent shadow p-3" paraColor="#111" iconContainer={true} icon={service.image} align="center" link={service.link} manageHeight={true} sec="servicePage" />
                      </Grid>
                      )
                    }
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

export default Services