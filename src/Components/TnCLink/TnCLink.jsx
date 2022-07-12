import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const TnCLink = () => {
  return (
    <>
    <Box>
        <NavLink to="/terms-and-conditions/" className='customPara font-weight-bold' style={{color:`var(--blue)`, fontWeight: 700}} >* Terms and Conditions apply.</NavLink>
    </Box>
    </>
  )
}

export default TnCLink