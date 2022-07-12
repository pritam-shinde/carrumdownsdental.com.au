import { Box, Typography, Divider, } from "@mui/material";
import './sass/ContactDetails.css';

const ContactDetails = () => {
    return (
        <>
            <Box px={2} py={5} className="ContactDetails">
                <Typography variant="h5" align="center" gutterBottom >Contact Details</Typography>
                <Divider style={{ backgroundColor: `var(--light-green)` }} />
                <Box>
                    {
                        [{ id: "contact-details1", title: "Clinic", para: ["1095 Frankston-Dandenong Rd, Carrum Downs VIC 3201"] }, { id: "contact-details2", title: "E-mail", para: ["<a href='mailto:carrumdownsdental@gmail.com'>carrumdownsdental@gmail.com</a>"] }, { id: "contact-details3", title: "Phone", para: ["<a href='tel:03-9782 1200'>03-9782 1200</a>"] }, { id: "contact-details4", title: "Opening hours", para: ["Mon - Sat 09am - 6pm", "Sunday CLOSED"] }].map(item => {
                            return <Box my={3} key={item.id}>
                                    <Typography variant="h6">{item.title}</Typography>
                                    {
                                        item.para.map((para, index)=><Typography key={`${item.id}.${index}`} dangerouslySetInnerHTML={{__html: para}} />)
                                    }
                                    </Box>
                        })
                    }
                </Box>
            </Box>
        </>
    )
}

export default ContactDetails