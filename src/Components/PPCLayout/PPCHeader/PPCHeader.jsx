import { Box, Container, Grid, Button, Link } from '@mui/material';
import { BlueBtn } from '../../Components'
import React from 'react';
import Logo from './images/logo.svg'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const PPCHeader = () => {
  const [width, setWidth] = useState();
  const [scrollHeight, setScrollHeight] = useState()

  useEffect(() => setWidth(window.innerWidth), [width]);

  window.addEventListener('scroll', () => {
    setScrollHeight(window.scrollY)
  })

  return (
    <>
      <header className={`fixed-top ${scrollHeight > 50 ? 'shadow-lg' : 'shadow-none'}`} style={{ backgroundColor: scrollHeight > 50 ? "#fff" : "transparent"}}>
        <Container maxWidth="xxl" className="py-3">
          <Grid container>
            <Grid item xs={12} lg={10} className="mx-auto d-flex align-items-center">
              <Box style={{ width: width > 992 ? "20%" : width > 600 && width < 992 ? "40%" : "50%" }}>
                <NavLink to="/"><img src={Logo} alt="logo" className='img-fluid' /></NavLink>
              </Box>
              <Box style={{ flexGrow: 1 }} />
              <Button className='rounded-pill mr-3' variant='contained' style={{ backgroundColor: "var(--blue)" }}><NavLink className="text-white" to="/book-now/">Book Now</NavLink></Button>
              <Button className='rounded-pill d-lg-block d-none' variant='contained' style={{ backgroundColor: "var(--blue)" }}><Link className="text-white" href='tel:03-9782 1200'>Call Now</Link></Button>
            </Grid>
          </Grid>
        </Container>
      </header>
    </>
  )
}

export default PPCHeader