import React from 'react';
import { Box } from '@mui/material';
import { SectionalHeading, BlueBtn } from '../Components';

const BookNow = () => {
    return (
        <>
            <Box p={4} mt={5} className="text-centet GreySec">
                <SectionalHeading title="Book an appointment with Carrum Downs Dental (Dandenong-Frankston Rd) on 03-9782 1200 for your wisdom tooth extraction." type="h4" align1="center" />
                <Box mt={3} className="text-center">
                    <BlueBtn link="/book-now/" title="Book Now" />
                </Box>
            </Box>
        </>
    )
}

export default BookNow