import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import { SimpleHero } from '../../Components/Components'

const BookNow = () => {
  return (
    <>
      <Helmet>
        <meta name="title" content="Book Now" />
        {/* <meta name="description" content="" />  */}
        <title>Book Now</title>
      </Helmet>
      <SimpleHero pageTitle='Book Appointment' />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container >
              <Grid item xs={11} lg={10} className="mx-auto" >
                <Box py={5} >
                  <div id="he-webplugin-62595"><iframe src="https://healthengine.com.au/webplugin/?id=64264&amp;source=webplugin" width="100%" height="500" classNmae="he-webplugin" name="open-appointments-widget-62595" frameborder="0" style={{ border: "2px solid #045475" }} title='myIframe' loading='lazy' ></iframe>

                  </div>
                  <script data-he-id="62595" data-he-width="100%" data-he-height="500" data-he-frame-css="border:2px solid #045475" src="https://healthengine.com.au/webplugin/appointments.js"></script>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default BookNow