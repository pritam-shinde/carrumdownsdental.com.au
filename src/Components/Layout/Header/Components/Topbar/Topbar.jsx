import React, {useState, useEffect} from 'react'
import { Grid } from '@mui/material'
import { Container, Box, Typography } from '@mui/material'
import { BiTime } from 'react-icons/bi';
import { FaMapMarker, FaPhoneAlt } from 'react-icons/fa';
import { SocialLinks } from '../../../../Components';
import './sass/topbar.css';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
  const [scrollHeight, setScrollHeight] = useState()
  const [width, setWidth] = useState();
  const location = useLocation();

  window.addEventListener('scroll', () => {
    setScrollHeight(window.scrollY)
  })

  useEffect(()=>{
    setWidth(window.innerWidth)
  }, [width])


  return (
    <>
      <Container maxWidth="xxl" className="p-0" id="topbar" style={{display: (scrollHeight > 50 || width < 1199) ? "none" : "block"}}>
        <Grid container>
          <Grid item xs={11} md={10} className="mx-auto">
            <Box py={2} id="topbarWrapper">
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <Box className='d-flex'>
                    <Typography><BiTime /><span className={location.pathname === "/thank-you/" ? 'text-dark' : 'text-white'}>Mon to Sat</span><span className={location.pathname === "/thank-you/" ? 'text-dark' : null}> 9AM - 6PM (Sunday Close)</span></Typography>
                    <Typography><FaMapMarker /><span className={location.pathname === "/thank-you/" ? 'text-dark' : 'text-white'}>Address</span><span className={location.pathname === "/thank-you/" ? 'text-dark' : null}> 1095 Frankston-Dandenong Rd, Carrum Downs VIC 3201</span></Typography>
                    <Typography><FaPhoneAlt /><span className={location.pathname === "/thank-you/" ? 'text-dark' : 'text-white'}>Call Today</span><span> <a href="tel: 03-9782 1200" className={location.pathname === "/thank-you/" ? 'text-dark' : null}> 03-9782 1200</a></span></Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} className="d-flex align-items-center">
                  <Box className='d-flex justify-content-end'>
                    <SocialLinks />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Topbar