import React from 'react';
import { Box } from '@mui/material';
import { ServiceForm, ContactDetails, OtherServices } from '../Components';

const Sidebar = ({ slug, isFormAvailable }) => {
    return (
        <>
            <Box style={{ height: "100%" }}>
                {
                    isFormAvailable ? <Box mb={3}>
                        <ServiceForm />
                    </Box> : null
                }
                <Box mb={3}>
                    <ContactDetails />
                </Box>
                <Box style={{ top: "12%", zIndex: 1, position: "sticky" }}>
                    <OtherServices slug={slug} />
                </Box>
            </Box>
        </>
    )
}

export default Sidebar