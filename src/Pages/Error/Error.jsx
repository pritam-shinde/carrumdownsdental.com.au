import { Container, Grid, Box, Typography } from '@mui/material';
import React from 'react';
import { BlueBtn, SimpleHero } from '../../Components/Components'

const Error = () => {
  return (
    <>
      <SimpleHero />
      <main>
        <section>
          <Container maxWidth="xxl" style={{height:"40vh"}}>
            <Grid container style={{height: "inherit"}}>
              <Grid itex xs={11} md={10} className="mx-auto d-flex justify-content-center align-items-center" style={{height: "inherit"}}>
                <Box className="text-center">
                  <Typography variant='h1' gutterBottom>404</Typography>
                  <Typography variant="h2" gutterBottom>Page Not Found..!</Typography>
                  <BlueBtn link="/" title="Go To HomePage" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Error