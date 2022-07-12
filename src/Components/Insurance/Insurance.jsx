import { Box } from '@mui/material'
import React from 'react';
import InsuranceImg from './images/brands.60f7f2853acc8f311df6.jpg'

const Insurance = () => {
  return (
    <>
    <Box className='text-center'>
        <img src={InsuranceImg} alt="brand" style={{maxWidth:"80%"}} loading="lazy" />
    </Box>
    </>
  )
}

export default Insurance