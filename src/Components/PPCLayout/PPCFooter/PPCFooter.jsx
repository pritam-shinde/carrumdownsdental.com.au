import React from 'react'
import { Container, Typography } from '@mui/material'
import { Copyright } from '@mui/icons-material'

const PPCFooter = () => {
  return (
    <>
      <footer style={{backgroundColor:'var(--blue)'}}>
        <Container maxWidth="xxl" className='text-center'>
          <Typography className='py-2 text-white'>Copyright <Copyright /> {new Date().getFullYear()} Carrum Downs Dental Group</Typography>
        </Container>
      </footer>
    </>
  )
}

export default PPCFooter