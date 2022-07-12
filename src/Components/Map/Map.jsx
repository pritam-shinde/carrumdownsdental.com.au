import { Box } from '@mui/material'
import React from 'react';
import './sass/Map.css'

const Map = () => {
  return (
    <>
      <Box className="greenBorder">
        <Box className="embed-responsive embed-responsive-1by1 mapContainer">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1570.1155765150593!2d145.182101!3d-38.088283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v1655441323120!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="carrumdowndental"></iframe>
        </Box>
      </Box>
    </>
  )
}

export default Map